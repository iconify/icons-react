import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w4fklccqs.css';
import '../../css/m/m31eqficj.css';
import '../../css/u/u_96bpbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w4fklccqs wm-k"/><path class="m31eqficj wm-a"/><path class="u_96bpbnz wm-deco"/></g>`,
		"fallback": "withicons-kawaii:fingerprint",
	});
}

export default Component;
