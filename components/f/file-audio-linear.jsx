import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zr35ecbmr.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/u/uaiu8_3kx.css';
import '../../css/x/xiz9lomik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zr35ecbmr"/><path class="e0cmz0boh"/><path class="uaiu8_3kx"/><path class="xiz9lomik"/></g>`,
		"fallback": "solar:file-audio-linear",
	});
}

export default Component;
