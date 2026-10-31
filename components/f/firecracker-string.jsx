import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/j7tcr07hg.css';
import '../../css/z/z7cq4bc7x.css';
import '../../css/i/i7lojq93e.css';
import '../../css/v/vrvmknben.css';
import '../../css/v/vqq0zc9np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGcGi8venK" cx="7.2" cy="5.08" r="24.23" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="j7tcr07hg wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wm-a z7cq4bc7x"/><path fill="url(#SVGcGi8venK)" class="i7lojq93e wm-k"/><path class="vrvmknben wm-shine"/><path class="vqq0zc9np wm-s"/></g>`,
		"fallback": "withicons-rangoli:firecracker-string",
	});
}

export default Component;
