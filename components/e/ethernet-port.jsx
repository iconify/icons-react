import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/l/le9wtnbni.css';
import '../../css/e/ejd10r3rs.css';
import '../../css/s/s0psn5b7j.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/v/vhebhwrxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6HxgaeIr" cx="7.2" cy="7.02" r="25.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="le9wtnbni wm-shadow"/><path fill="url(#SVG6HxgaeIr)" class="ejd10r3rs wm-k"/><path class="s0psn5b7j wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="vhebhwrxs wm-deco"/></g>`,
		"fallback": "withicons-rangoli:ethernet-port",
	});
}

export default Component;
