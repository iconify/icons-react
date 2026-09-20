import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nahi2pb-d.css';
import '../../css/d/d4-wn8r2x.css';
import '../../css/n/nrb_khbyp.css';
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
		"content": `<g class="ipq1z-bjh"><path class="nahi2pb-d"/><path class="d4-wn8r2x"/><path class="nrb_khbyp"/><path class="e0cmz0boh"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-spreadsheet-linear",
	});
}

export default Component;
