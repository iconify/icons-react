import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/e/ewfu8297g.css';
import '../../css/r/rbehm1x7f.css';
import '../../css/n/nt-x3l71g.css';
import '../../css/u/ucko4d1rn.css';
import '../../css/y/ygh0ay2zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGpNUNibRz" cx="8.52" cy="6.18" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="ewfu8297g wm-shadow"/><path fill="url(#SVGpNUNibRz)" class="rbehm1x7f wm-k"/><path class="nt-x3l71g wm-shine"/><path class="ucko4d1rn wm-s"/><path class="wm-s ygh0ay2zq"/></g>`,
		"fallback": "withicons-rangoli:file-cog",
	});
}

export default Component;
