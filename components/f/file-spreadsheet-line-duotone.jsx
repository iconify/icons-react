import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/n/nahi2pb-d.css';
import '../../css/y/ygngqhemd.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="nahi2pb-d"/><path class="ygngqhemd"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-spreadsheet-line-duotone",
	});
}

export default Component;
