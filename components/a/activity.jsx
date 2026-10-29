import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/z/zy632dv8b.css';
import '../../css/w/wnels9bwd.css';
import '../../css/z/z-chnqgdw.css';
import '../../css/t/tf7onq4fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGfGNC8ZYY" cx="12" cy="13.12" r="11.22" fx="9.28" fy="9.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGOafqlbAp" cx="12" cy="12.7" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGOafqlbAp)" class="azx2d2tww wm-deco"/><path class="wm-shadow zy632dv8b"/><path class="wm-k wnels9bwd"/><path stroke="url(#SVGfGNC8ZYY)" class="wm-k z-chnqgdw"/><path class="tf7onq4fu wm-shine"/></g>`,
		"fallback": "withicons-halloween:activity",
	});
}

export default Component;
