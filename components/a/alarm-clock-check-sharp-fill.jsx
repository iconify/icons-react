import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vndk8uiaj.css';
import '../../css/z/ztp2ojn_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="vndk8uiaj"/><path class="ztp2ojn_h"/></g>`,
		"fallback": "keyline-icons:alarm-clock-check-sharp-fill",
	});
}

export default Component;
