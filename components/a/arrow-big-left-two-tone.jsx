import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cy3t6rbdc.css';
import '../../css/h/haqo56b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cy3t6rbdc"/><path class="haqo56b_k"/></g>`,
		"fallback": "keyline-icons:arrow-big-left-two-tone",
	});
}

export default Component;
