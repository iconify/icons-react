import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/ym0kd93pj.css';
import '../../css/f/fj6ah-doh.css';
import '../../css/p/pbrefdcwu.css';
import '../../css/e/emcn8qntp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfCJuEePi" x1="10" x2="14" y1="2.1" y2="21.89" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k ym0kd93pj"/><path class="fj6ah-doh wm-deco"/><path fill="url(#SVGfCJuEePi)" class="pbrefdcwu wm-k"/><path class="emcn8qntp wm-shadow"/></g>`,
		"fallback": "withicons-valentine:atom",
	});
}

export default Component;
