import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/t/tehxswjzr.css';
import '../../css/p/pdmn-5yui.css';
import '../../css/i/itqwwqc5t.css';
import '../../css/d/dapkku_wk.css';
import '../../css/f/fuebh9bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG1hcwMcUt" cx="7.2" cy="6.58" r="24.23" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="tehxswjzr wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="pdmn-5yui wm-a"/><path fill="url(#SVG1hcwMcUt)" class="itqwwqc5t wm-k"/><path class="dapkku_wk wm-shine"/><path class="fuebh9bjb wm-s"/></g>`,
		"fallback": "withicons-rangoli:ambulance",
	});
}

export default Component;
