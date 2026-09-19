import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-szywbkr.css';
import '../../css/v/vd60ycbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y-szywbkr"/><path class="vd60ycbwv"/></g>`,
		"fallback": "feather:corner-down-left",
	});
}

export default Component;
