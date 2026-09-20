import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f6r4a2bvx.css';
import '../../css/k/kx_7c83ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f6r4a2bvx"/><path class="kx_7c83ot"/></g>`,
		"fallback": "keyline-icons:chart-pyramid-sharp-two-tone",
	});
}

export default Component;
