import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h-zhm6laf.css';
import '../../css/t/tw6m3wbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h-zhm6laf"/><path class="tw6m3wbjv"/></g>`,
		"fallback": "akar-icons:envelope",
	});
}

export default Component;
