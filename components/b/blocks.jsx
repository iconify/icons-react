import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/i/in-ey6b1p.css';
import '../../css/w/w66z3ebrw.css';
import '../../css/k/kvfd2g35i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="in-ey6b1p wm-shadow"/><path fill="url(#SVGU00zieBw)" class="w66z3ebrw wm-k"/><path class="kvfd2g35i wm-shine"/></g>`,
		"fallback": "withicons-rangoli:blocks",
	});
}

export default Component;
