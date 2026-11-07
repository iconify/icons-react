import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wqs3cnbmu.css';
import '../../css/j/jgnu0ac5k.css';
import '../../css/k/k381aobgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wqs3cnbmu"/><path class="jgnu0ac5k"/><path class="k381aobgn"/></g>`,
		"fallback": "solar:archive-minimalistic-close-linear",
	});
}

export default Component;
