import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/p/pdw8enbve.css';
import '../../css/s/sa9a21fhc.css';
import '../../css/u/u2znty6nw.css';
import '../../css/t/t94-j9b9m.css';
import '../../css/t/th0tfxbcb.css';
import '../../css/u/u72b4o64q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDmGLGbLt" x1="2.58" x2="21.43" y1="1.19" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGDmGLGbLt)" class="pdw8enbve wm-k"/><path fill="url(#SVGDmGLGbLt)" class="sa9a21fhc wm-a"/><path class="u2znty6nw wm-shine"/><path class="t94-j9b9m wm-shine"/><path class="th0tfxbcb wm-shine"/><path class="u72b4o64q wm-shine"/></g>`,
		"fallback": "withicons-lunar:cloud-fog",
	});
}

export default Component;
