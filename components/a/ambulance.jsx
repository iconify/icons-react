import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/a1taakb4j.css';
import '../../css/f/fgtfpkbpm.css';
import '../../css/g/g88yp7bdt.css';
import '../../css/s/sodelab6h.css';
import '../../css/q/qeymx88sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNnTM0vHe" x1="1" x2="23" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGNnTM0vHe)" class="a1taakb4j wm-k"/><path fill="url(#SVGNnTM0vHe)" class="fgtfpkbpm wm-a"/><path stroke="url(#SVGNnTM0vHe)" class="g88yp7bdt wm-s"/><path class="sodelab6h wm-shine"/><path class="qeymx88sn wm-shine"/></g>`,
		"fallback": "withicons-lunar:ambulance",
	});
}

export default Component;
