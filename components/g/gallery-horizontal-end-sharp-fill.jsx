import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mxofbebzn.css';
import '../../css/z/zp1jvb-hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mxofbebzn"/><path class="zp1jvb-hk"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-end-sharp-fill",
	});
}

export default Component;
