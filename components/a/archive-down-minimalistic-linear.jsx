import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wqs3cnbmu.css';
import '../../css/b/bq64z4bfb.css';
import '../../css/k/k381aobgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wqs3cnbmu"/><path class="bq64z4bfb"/><path class="k381aobgn"/></g>`,
		"fallback": "solar:archive-down-minimalistic-linear",
	});
}

export default Component;
