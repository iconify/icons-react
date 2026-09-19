import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hx71gjbvg.css';
import '../../css/y/y0h80i1jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hx71gjbvg"/><path class="y0h80i1jz"/></g>`,
		"fallback": "hugeicons:bitcoin-send",
	});
}

export default Component;
