import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/q2fl6mbur.css';
import '../../css/i/ibwjk1bkv.css';
import '../../css/j/jp99lwiea.css';
import '../../css/j/jhhec3bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG525wda6I" x1="1.32" x2="22.68" y1="1.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVG525wda6I)" class="q2fl6mbur wm-k"/><path fill="url(#SVG525wda6I)" class="ibwjk1bkv wm-a"/><path class="jp99lwiea wm-shine"/><path class="jhhec3bmr wm-shine"/></g>`,
		"fallback": "withicons-lunar:bee",
	});
}

export default Component;
