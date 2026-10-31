import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/vzxp10b_g.css';
import '../../css/b/b28kotb5z.css';
import '../../css/z/z-v23fvng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmZb3CcWx" x1="0" x2="0" y1="3.01" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGc5KmUUAJ" x1="3.5" x2="20.49" y1="3.01" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGmZb3CcWx)" stroke="url(#SVGc5KmUUAJ)" class="vzxp10b_g wm-k"/><path class="b28kotb5z wm-shine"/><path class="wm-shine z-v23fvng"/></g>`,
		"fallback": "withicons-lunar:corner-down-right",
	});
}

export default Component;
