import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e7v762dhy.css';
import '../../css/g/gs_dhun0e.css';
import '../../css/n/nob2a0bbf.css';
import '../../css/j/j4pir7mhg.css';
import '../../css/w/wftdd0ccr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e7v762dhy"/><path class="gs_dhun0e wm-shadow"/><path class="nob2a0bbf"/><path class="j4pir7mhg"/><path class="wftdd0ccr"/></g>`,
		"fallback": "withicons:avatar-unicorn-engrave",
	});
}

export default Component;
