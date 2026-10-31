import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1k_tubjg.css';
import '../../css/w/wcfwaqmrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q1k_tubjg"/><path class="wcfwaqmrd"/></g>`,
		"fallback": "coolicons:facebook-duocolor-round",
	});
}

export default Component;
