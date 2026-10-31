import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnzvalwps.css';
import '../../css/y/y_l45ibrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fnzvalwps"/><path class="y_l45ibrm"/></g>`,
		"fallback": "coolicons:bulb-duocolor-round",
	});
}

export default Component;
