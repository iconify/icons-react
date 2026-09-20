import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2i7cg_sc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2i7cg_sc"/>`,
		"fallback": "pinhead:brick-wall-with-bolt",
	});
}

export default Component;
