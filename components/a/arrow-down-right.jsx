import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/j/j10y_sbul.css';
import '../../css/c/cb4bgcbjv.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/w/w4y6tptdk.css';
import '../../css/e/eeureccwa.css';
import '../../css/g/gfi8eab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG2MPAqb5K" cx="12" cy="13.04" r="8.58" fx="9.92" fy="9.92" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVG00jExeRZ" cx="12" cy="12.65" r="10.56" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="cb4bgcbjv"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVG00jExeRZ)" class="azx2d2tww wm-deco"/><path class="w4y6tptdk wm-shadow"/><path fill="url(#SVG2MPAqb5K)" class="eeureccwa wm-k"/><path class="gfi8eab0a wm-shine"/></g>`,
		"fallback": "withicons-halloween:arrow-down-right",
	});
}

export default Component;
