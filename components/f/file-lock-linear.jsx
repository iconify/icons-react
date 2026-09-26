import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-dkfybbn.css';
import '../../css/f/fu0hrlguj.css';
import '../../css/z/zr35ecbmr.css';
import '../../css/e/e0cmz0boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t-dkfybbn"/><path class="fu0hrlguj"/><path class="zr35ecbmr"/><path class="e0cmz0boh"/></g>`,
		"fallback": "solar:file-lock-linear",
	});
}

export default Component;
