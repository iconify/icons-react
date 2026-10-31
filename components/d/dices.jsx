import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/k/kak3m6g5y.css';
import '../../css/o/opxe2ubvp.css';
import '../../css/s/sfuq17_up.css';
import '../../css/l/lk-pa27hc.css';
import '../../css/s/swuv7hbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGoXjcXc7W" x1="0" x2="0" y1="10" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGA4SaCemP" x1="3" x2="21" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><rect fill="url(#SVGA4SaCemP)" class="kak3m6g5y wm-a"/><path class="opxe2ubvp wm-a"/><rect fill="url(#SVGoXjcXc7W)" stroke="url(#SVGA4SaCemP)" class="sfuq17_up wm-k"/><rect class="lk-pa27hc wm-shine"/><path class="swuv7hbtv wm-shine"/></g>`,
		"fallback": "withicons-lunar:dices",
	});
}

export default Component;
