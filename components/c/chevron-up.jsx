import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/j/j10y_sbul.css';
import '../../css/c/cb4bgcbjv.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/j/j2e0szm9z.css';
import '../../css/v/vro2j4b2s.css';
import '../../css/g/g3wlqccoz.css';
import '../../css/p/pfa0kfbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGQh1Dpb7I" cx="12" cy="12.65" r="9.24" fx="9.76" fy="10.57" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGimrxbdTB" cx="12" cy="12.41" r="11.18" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="cb4bgcbjv"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGimrxbdTB)" class="azx2d2tww wm-deco"/><path class="j2e0szm9z wm-shadow"/><path class="vro2j4b2s wm-k"/><path stroke="url(#SVGQh1Dpb7I)" class="g3wlqccoz wm-k"/><path class="pfa0kfbdl wm-shine"/></g>`,
		"fallback": "withicons-halloween:chevron-up",
	});
}

export default Component;
