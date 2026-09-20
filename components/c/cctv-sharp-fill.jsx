import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k5ha-2b_m.css';
import '../../css/q/q9gipob_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="k5ha-2b_m"/><path class="q9gipob_j"/></g>`,
		"fallback": "keyline-icons:cctv-sharp-fill",
	});
}

export default Component;
