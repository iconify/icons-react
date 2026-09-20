import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyb-wtboh.css';
import '../../css/v/vqgmm6bjt.css';
import '../../css/o/odr2ivbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wyb-wtboh"><path class="vqgmm6bjt"/><path class="odr2ivbps"/></g>`,
		"fallback": "thesvg-color:centml",
	});
}

export default Component;
