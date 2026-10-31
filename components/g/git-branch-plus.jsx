import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/u/u9eq1sbpm.css';
import '../../css/v/vpv4e227a.css';
import '../../css/t/tqecbdclk.css';
import '../../css/m/mgkhdaclz.css';
import '../../css/r/rjr-pbbyg.css';
import '../../css/u/u77fz4bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGPRABocTO" cx="6.8" cy="6.46" r="23.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="u9eq1sbpm wm-shadow"/><path fill="url(#SVGPRABocTO)" class="vpv4e227a wm-k"/><path class="tqecbdclk wm-shine"/><path class="mgkhdaclz wm-s"/><path class="rjr-pbbyg wm-deco"/><path class="u77fz4bci wm-deco"/></g>`,
		"fallback": "withicons-rangoli:git-branch-plus",
	});
}

export default Component;
