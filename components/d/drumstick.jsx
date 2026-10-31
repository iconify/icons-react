import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/jyb3dwb7d.css';
import '../../css/p/psyawpbia.css';
import '../../css/w/w-557xb6m.css';
import '../../css/h/h897prb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3tZWmeYc" x1="0" x2="0" y1="2.53" y2="22.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGGddWWd4y" x1="1.94" x2="21.47" y1="2.53" y2="22.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG3tZWmeYc)" stroke="url(#SVGGddWWd4y)" class="jyb3dwb7d wm-k"/><path fill="url(#SVGGddWWd4y)" class="psyawpbia wm-a"/><path class="w-557xb6m wm-shine"/><path class="h897prb-t wm-shine"/></g>`,
		"fallback": "withicons-lunar:drumstick",
	});
}

export default Component;
