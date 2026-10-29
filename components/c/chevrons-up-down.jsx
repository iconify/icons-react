import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/s/svsyk2bqe.css';
import '../../css/d/dhau0jb_j.css';
import '../../css/a/azx2d2tww.css';
import '../../css/n/n0iabib-c.css';
import '../../css/t/tyf0y7mnf.css';
import '../../css/e/e-kk75w8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG3rGhzeRd" cx="12" cy="12.65" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient><radialGradient id="SVGkKj16daX" cx="12" cy="13.57" r="12.94" fx="9.83" fy="8.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="svsyk2bqe"/><stop offset=".45" class="svsyk2bqe"/><stop offset="1" class="dhau0jb_j"/></radialGradient></defs><path fill="url(#SVG3rGhzeRd)" class="azx2d2tww wm-deco"/><path class="n0iabib-c wm-shadow"/><path fill="url(#SVGkKj16daX)" class="tyf0y7mnf wm-k"/><path class="e-kk75w8e wm-shine"/></g>`,
		"fallback": "withicons-halloween:chevrons-up-down",
	});
}

export default Component;
