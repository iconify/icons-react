import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/v23m_4brp.css';
import '../../css/r/rait5s5bv.css';
import '../../css/z/zqwnr8bee.css';
import '../../css/d/dzil58b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9KckeefL" x1="0" x2="0" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG6CCx3bvG" x1="1" x2="23" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG9KckeefL)" stroke="url(#SVG6CCx3bvG)" class="v23m_4brp wm-k"/><path stroke="url(#SVG6CCx3bvG)" class="rait5s5bv wm-s"/><path class="wm-shine zqwnr8bee"/><path class="dzil58b6e wm-shine"/></g>`,
		"fallback": "withicons-lunar:git-pull-request-closed",
	});
}

export default Component;
