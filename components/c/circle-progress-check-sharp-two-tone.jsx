import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t0_3emlbr.css';
import '../../css/h/ha1er-b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t0_3emlbr"/><path class="ha1er-b1q"/></g>`,
		"fallback": "keyline-icons:circle-progress-check-sharp-two-tone",
	});
}

export default Component;
