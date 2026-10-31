import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/lzasgj3qk.css';
import '../../css/f/fr9q5hb3z.css';
import '../../css/p/pv6j-6obs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGsrzDseMk" x1="0" x2="0" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGhRAFSbjP" x1="1.41" x2="22.59" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGsrzDseMk)" stroke="url(#SVGhRAFSbjP)" class="lzasgj3qk wm-k"/><path class="fr9q5hb3z wm-shine"/><path class="pv6j-6obs wm-shine"/></g>`,
		"fallback": "withicons-lunar:bat",
	});
}

export default Component;
