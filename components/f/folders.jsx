import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/ntgsznm6y.css';
import '../../css/t/t5aqzna1j.css';
import '../../css/u/u6e9l0bni.css';
import '../../css/t/tihyn4bfc.css';
import '../../css/r/r8swcys0b.css';
import '../../css/q/q1jq2nw-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxY7Wfcza" x1="2.01" x2="22" y1="2.01" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="ntgsznm6y wm-k"/><path fill="url(#SVGxY7Wfcza)" class="t5aqzna1j wm-a"/><path class="u6e9l0bni wm-shine"/><path class="tihyn4bfc wm-shine"/><path class="r8swcys0b wm-shine"/><path class="q1jq2nw-p wm-shine"/></g>`,
		"fallback": "withicons-lunar:folders",
	});
}

export default Component;
