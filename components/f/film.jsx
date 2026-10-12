import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fb_vrmb-h.css';
import '../../css/k/kklxembkl.css';
import '../../css/i/if4m6-b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fb_vrmb-h"/><rect transform="rotate(90 0 21.23)scale(-1 1)" class="kklxembkl"/><path class="if4m6-b3h"/></g>`,
		"fallback": "andrsrxn:film",
	});
}

export default Component;
