import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g56u1es1x.css';
import '../../css/o/o5_bbwren.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g56u1es1x"/><path class="o5_bbwren"/></g>`,
		"fallback": "solar:card-recive-broken",
	});
}

export default Component;
