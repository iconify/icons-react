import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vthrfk-xu.css';
import '../../css/k/k6zo3ibwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vthrfk-xu"/><path class="k6zo3ibwm"/></g>`,
		"fallback": "keyline-icons:bug-sharp-fill",
	});
}

export default Component;
