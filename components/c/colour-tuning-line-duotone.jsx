import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yf6t0ebje.css';
import '../../css/u/ub3rxq97j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yf6t0ebje"/><path class="ub3rxq97j"/></g>`,
		"fallback": "solar:colour-tuning-line-duotone",
	});
}

export default Component;
