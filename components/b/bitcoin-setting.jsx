import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q1ro96p8m.css';
import '../../css/w/w4lklcbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q1ro96p8m"/><path class="w4lklcbto"/></g>`,
		"fallback": "hugeicons:bitcoin-setting",
	});
}

export default Component;
