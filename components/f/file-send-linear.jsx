import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nolgwwqgn.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nolgwwqgn"/><path class="e0cmz0boh"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-send-linear",
	});
}

export default Component;
