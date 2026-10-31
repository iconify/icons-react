import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/yxrzhgbnk.css';
import '../../css/v/v8yafsdcx.css';
import '../../css/g/gg-c-10xb.css';
import '../../css/j/jy-4asrdh.css';
import '../../css/v/v70a2_b-e.css';
import '../../css/j/jp30hebvr.css';
import '../../css/b/bvallzbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k yxrzhgbnk"/><path class="v8yafsdcx wm-deco"/><path class="gg-c-10xb wm-k"/><path fill="url(#SVG8cgrrczU)" class="jy-4asrdh wm-k"/><path class="v70a2_b-e wm-shadow"/><path class="jp30hebvr wm-shine"/><path class="bvallzbfi wm-shine"/></g>`,
		"fallback": "withicons-valentine:hourglass",
	});
}

export default Component;
