import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/o/oyw_3nx2a.css';
import '../../css/f/f8ja1bcvm.css';
import '../../css/g/gc28zzb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJwu8ZdEH" x1="0" x2="0" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG48eP010c" x1="1.5" x2="22.5" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGJwu8ZdEH)" stroke="url(#SVG48eP010c)" class="oyw_3nx2a wm-k"/><path class="f8ja1bcvm wm-shine"/><path class="gc28zzb_q wm-shine"/></g>`,
		"fallback": "withicons-lunar:beef",
	});
}

export default Component;
