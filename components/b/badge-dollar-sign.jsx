import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/u47e6lvyn.css';
import '../../css/s/s6ho10b1j.css';
import '../../css/v/v_cdbsgtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGicxaEeTV" x1="1.01" x2="23" y1="1.02" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGicxaEeTV)" class="u47e6lvyn wm-k"/><path class="s6ho10b1j wm-shine"/><path class="v_cdbsgtu wm-shine"/></g>`,
		"fallback": "withicons-lunar:badge-dollar-sign",
	});
}

export default Component;
