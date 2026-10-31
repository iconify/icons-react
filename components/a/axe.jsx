import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/uukuajbgl.css';
import '../../css/k/kybntjbfv.css';
import '../../css/v/vcxb2bcpe.css';
import '../../css/p/pp_gjgbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDmM7xjNs" x1="0" x2="0" y1="1.29" y2="22.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGstzUXoKE" x1="6.07" x2="20.42" y1="1.29" y2="22.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGDmM7xjNs)" stroke="url(#SVGstzUXoKE)" class="uukuajbgl wm-k"/><path fill="url(#SVGstzUXoKE)" class="kybntjbfv wm-a"/><path class="vcxb2bcpe wm-shine"/><path class="pp_gjgbfa wm-shine"/></g>`,
		"fallback": "withicons-lunar:axe",
	});
}

export default Component;
