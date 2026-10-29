import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/j/j10y_sbul.css';
import '../../css/c/cb4bgcbjv.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/y/yd846sowc.css';
import '../../css/l/lnictim-s.css';
import '../../css/i/iplc_pwki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGAAWaOedf" cx="12" cy="13.44" r="11.88" fx="9.6" fy="8.76" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGocZ1cbSA" cx="12" cy="12.9" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="cb4bgcbjv"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGocZ1cbSA)" class="azx2d2tww wm-deco"/><path class="wm-shadow yd846sowc"/><path fill="url(#SVGAAWaOedf)" class="lnictim-s wm-k"/><path class="iplc_pwki wm-shine"/></g>`,
		"fallback": "withicons-halloween:arrow-down",
	});
}

export default Component;
