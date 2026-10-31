import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/h/heaz43b9h.css';
import '../../css/r/r2p9nybrq.css';
import '../../css/y/yadq00bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdEghCsdJ" x1="4.94" x2="20.85" y1="3.14" y2="19.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGdEghCsdJ)" class="heaz43b9h wm-k"/><path class="r2p9nybrq wm-shine"/><path class="wm-shine yadq00bkn"/></g>`,
		"fallback": "withicons-lunar:crayon",
	});
}

export default Component;
