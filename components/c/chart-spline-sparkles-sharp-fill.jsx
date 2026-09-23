import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hu6vjwbej.css';
import '../../css/i/ij6ehrbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hu6vjwbej"/><path class="ij6ehrbcl"/></g>`,
		"fallback": "keyline-icons:chart-spline-sparkles-sharp-fill",
	});
}

export default Component;
