import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/s/sy06pebyt.css';
import '../../css/t/t67cke18e.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="sy06pebyt"/><path class="t67cke18e"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-braces-line-duotone",
	});
}

export default Component;
