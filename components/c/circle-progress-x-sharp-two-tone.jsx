import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t0_3emlbr.css';
import '../../css/x/xcqi15b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t0_3emlbr"/><path class="xcqi15b_i"/></g>`,
		"fallback": "keyline-icons:circle-progress-x-sharp-two-tone",
	});
}

export default Component;
