import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/z_61u0dzp.css';
import '../../css/v/v6cfzz1cd.css';
import '../../css/u/uusvghoyr.css';
import '../../css/x/xtxeasohj.css';
import '../../css/w/w1ke7gbyu.css';
import '../../css/n/nzusneb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzjneBbYG" x1="10" x2="14" y1="3.02" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k z_61u0dzp"/><path class="v6cfzz1cd wm-deco"/><path fill="url(#SVGzjneBbYG)" class="uusvghoyr wm-k"/><path class="wm-shadow xtxeasohj"/><path class="w1ke7gbyu wm-shine"/><path class="nzusneb3z wm-shine"/></g>`,
		"fallback": "withicons-valentine:corner-up-right",
	});
}

export default Component;
