import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/ki9xk50fb.css';
import '../../css/e/e3dmmdpkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ki9xk50fb"/><path class="e3dmmdpkn"/></g>`,
		"fallback": "keyline-icons:bars-progress-sharp-two-tone",
	});
}

export default Component;
