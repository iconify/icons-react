import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/p-15cub3i.css';
import '../../css/t/tao_fbcib.css';
import '../../css/l/lcmwl-bvg.css';
import '../../css/k/kayjxizfb.css';
import '../../css/d/dpuklh0hd.css';
import '../../css/m/m6v8_zbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGL2ltqe5R" x1="10" x2="14" y1="2.08" y2="21.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="p-15cub3i wm-k"/><path class="tao_fbcib wm-deco"/><path fill="url(#SVGL2ltqe5R)" class="lcmwl-bvg wm-k"/><path class="kayjxizfb wm-shadow"/><path class="dpuklh0hd wm-shine"/><path class="m6v8_zbsa wm-shine"/></g>`,
		"fallback": "withicons-valentine:bone",
	});
}

export default Component;
