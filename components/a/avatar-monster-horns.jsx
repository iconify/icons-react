import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/ap0_vibso.css';
import '../../css/z/zim91sqzr.css';
import '../../css/m/m4r83_8wk.css';
import '../../css/r/r38d9rqbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPuXPlbtn" x1="3.76" x2="20.24" y1="2" y2="21.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="ap0_vibso wm-k"/><path fill="url(#SVGPuXPlbtn)" class="wm-a zim91sqzr"/><path class="m4r83_8wk wm-shine"/><path class="r38d9rqbw wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-monster-horns",
	});
}

export default Component;
