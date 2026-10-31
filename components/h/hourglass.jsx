import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/v/v01mhpb6l.css';
import '../../css/m/m71vru68d.css';
import '../../css/f/fks9w4p2g.css';
import '../../css/h/h1rjpn_2d.css';
import '../../css/t/tqczecbpq.css';
import '../../css/b/b50irbywm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGpNUNibRz" cx="8.52" cy="6.18" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="v01mhpb6l wm-shadow"/><path fill="url(#SVGpNUNibRz)" class="m71vru68d wm-k"/><path class="fks9w4p2g wm-k"/><path class="h1rjpn_2d wm-shine"/><path class="tqczecbpq wm-deco"/><path class="b50irbywm wm-deco"/></g>`,
		"fallback": "withicons-rangoli:hourglass",
	});
}

export default Component;
