import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-w1mof7v.css';
import '../../css/d/dod-re5li.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-w1mof7v"/><path class="dod-re5li"/>`,
		"fallback": "energy-icons:code-block-20-bold",
	});
}

export default Component;
