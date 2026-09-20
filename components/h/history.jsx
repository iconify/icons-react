import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2lh2ub1f.css';
import '../../css/c/c2zv7fbst.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2lh2ub1f"/><path class="c2zv7fbst"/>`,
		"fallback": "ooui:history",
	});
}

export default Component;
