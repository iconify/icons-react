import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/w7sq8lbhi.css';
import '../../css/f/f7x_xxjuj.css';
import '../../css/p/pj0msmn0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5TMYdeiZ" x1="1.51" x2="22.49" y1="4" y2="19.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG5TMYdeiZ)" class="w7sq8lbhi wm-k"/><path class="f7x_xxjuj wm-shine"/><path class="pj0msmn0i wm-shine"/></g>`,
		"fallback": "withicons-lunar:eye",
	});
}

export default Component;
