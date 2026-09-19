import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d3fyn5dqs.css';
import '../../css/f/f9ny33z6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d3fyn5dqs"/><path class="f9ny33z6j"/></g>`,
		"fallback": "hugeicons:cashier",
	});
}

export default Component;
