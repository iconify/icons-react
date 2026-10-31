import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/p/pgegyvpwk.css';
import '../../css/e/escxdvl1b.css';
import '../../css/n/nt-x3l71g.css';
import '../../css/j/jl6iz-bvp.css';
import '../../css/e/e2wnrbj2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGpNUNibRz" cx="8.52" cy="6.18" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="pgegyvpwk wm-shadow"/><path fill="url(#SVGpNUNibRz)" class="escxdvl1b wm-k"/><path class="nt-x3l71g wm-shine"/><path class="jl6iz-bvp wm-s"/><path class="e2wnrbj2t wm-s"/></g>`,
		"fallback": "withicons-rangoli:file-pen",
	});
}

export default Component;
