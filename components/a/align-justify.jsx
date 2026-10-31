import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/i/irn2a2-fm.css';
import '../../css/m/mka7s2ugt.css';
import '../../css/t/tb7o3mb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGQbsRfcST" cx="3" cy="3" r="24" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".15" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="irn2a2-fm wm-shadow"/><path fill="url(#SVGQbsRfcST)" class="mka7s2ugt wm-k"/><path class="tb7o3mb7s wm-shine"/></g>`,
		"fallback": "withicons-rangoli:align-justify",
	});
}

export default Component;
