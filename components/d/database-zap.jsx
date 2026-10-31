import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/upctg-s4f.css';
import '../../css/g/gx1i019nj.css';
import '../../css/m/me51utb5k.css';
import '../../css/i/innhjlthl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOcvFycwv" x1="0" x2="0" y1="1.5" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG53IMAcSS" x1="3" x2="22.49" y1="1.5" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGOcvFycwv)" stroke="url(#SVG53IMAcSS)" class="upctg-s4f wm-k"/><path stroke="url(#SVG53IMAcSS)" class="gx1i019nj wm-s"/><path class="me51utb5k wm-shine"/><path class="innhjlthl wm-shine"/></g>`,
		"fallback": "withicons-lunar:database-zap",
	});
}

export default Component;
