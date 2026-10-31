import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/o/o-b8j3bez.css';
import '../../css/d/di0xq7bra.css';
import '../../css/x/xr-0a6bbf.css';
import '../../css/o/ofkcfhbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJyO5ncVH" x1="0" x2="0" y1="2.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGoqnprdWD" x1="1.51" x2="22.5" y1="2.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGJyO5ncVH)" stroke="url(#SVGoqnprdWD)" class="o-b8j3bez wm-k"/><path fill="url(#SVGoqnprdWD)" class="di0xq7bra wm-a"/><path class="wm-shine xr-0a6bbf"/><path class="ofkcfhbvq wm-shine"/></g>`,
		"fallback": "withicons-lunar:burger",
	});
}

export default Component;
