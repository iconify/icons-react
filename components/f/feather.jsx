import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/a93eenb4f.css';
import '../../css/m/muwsly12f.css';
import '../../css/e/ea_ydsbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGaaL5znhk" x1="0" x2="0" y1="3.22" y2="21.17" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG7IvAceZf" x1="2.84" x2="20.79" y1="3.22" y2="21.17" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGaaL5znhk)" stroke="url(#SVG7IvAceZf)" class="a93eenb4f wm-k"/><path class="muwsly12f wm-shine"/><path class="ea_ydsbkx wm-shine"/></g>`,
		"fallback": "withicons-lunar:feather",
	});
}

export default Component;
