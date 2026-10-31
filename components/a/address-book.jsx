import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/hy_217buq.css';
import '../../css/l/l60esl2uz.css';
import '../../css/m/m9rz-pbcz.css';
import '../../css/i/i8eww2__g.css';
import '../../css/n/nmqn2gbqh.css';
import '../../css/b/b15y44bpf.css';
import '../../css/i/ivj36gbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGINyjEdHv" x1="10" x2="14" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="hy_217buq wm-k"/><path class="l60esl2uz wm-deco"/><path class="m9rz-pbcz wm-k"/><path fill="url(#SVGINyjEdHv)" class="i8eww2__g wm-k"/><path class="nmqn2gbqh wm-shadow"/><path class="b15y44bpf wm-shine"/><path class="ivj36gbzn wm-shine"/></g>`,
		"fallback": "withicons-valentine:address-book",
	});
}

export default Component;
