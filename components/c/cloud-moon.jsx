import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/j0cj7s5ge.css';
import '../../css/d/d59flbbfn.css';
import '../../css/v/vgnw3kbwo.css';
import '../../css/y/y8s9foydv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG37rz2wKU" x1="0" x2="0" y1="2.27" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGqgky00fY" x1="1.76" x2="22.45" y1="2.27" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG37rz2wKU)" stroke="url(#SVGqgky00fY)" class="j0cj7s5ge wm-k"/><path fill="url(#SVGqgky00fY)" class="d59flbbfn wm-a"/><path class="vgnw3kbwo wm-shine"/><path class="wm-shine y8s9foydv"/></g>`,
		"fallback": "withicons-lunar:cloud-moon",
	});
}

export default Component;
