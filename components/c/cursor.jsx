import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/uo4qrmbba.css';
import '../../css/u/u8szx1b8s.css';
import '../../css/m/m67iqvh9f.css';
import '../../css/u/uap7ucb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGG8F5gc7I" x1="0" x2="0" y1="1.51" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGrewuQFGK" x1="4.01" x2="19.99" y1="1.51" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGG8F5gc7I)" stroke="url(#SVGrewuQFGK)" class="uo4qrmbba wm-k"/><path fill="url(#SVGrewuQFGK)" class="u8szx1b8s wm-a"/><path class="m67iqvh9f wm-shine"/><path class="uap7ucb2b wm-shine"/></g>`,
		"fallback": "withicons-lunar:cursor",
	});
}

export default Component;
