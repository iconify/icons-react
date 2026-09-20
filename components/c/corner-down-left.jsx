import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vd60ycbwv.css';
import '../../css/y/y-szywbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vd60ycbwv"/><path class="y-szywbkr"/></g>`,
		"fallback": "lucide:corner-down-left",
	});
}

export default Component;
