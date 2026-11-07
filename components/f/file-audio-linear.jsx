import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zr35ecbmr.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/u/uaiu8_3kx.css';
import '../../css/k/k93z-hp8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zr35ecbmr"/><path class="e0cmz0boh"/><path class="uaiu8_3kx"/><path class="k93z-hp8c"/></g>`,
		"fallback": "solar:file-audio-linear",
	});
}

export default Component;
