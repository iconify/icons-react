import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mxjdc1bfr.css';
import '../../css/z/ztp2ojn_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="mxjdc1bfr"/><path class="ztp2ojn_h"/></g>`,
		"fallback": "keyline-icons:alarm-clock-sharp-fill",
	});
}

export default Component;
