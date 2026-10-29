import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbwg7tbug.css';
import '../../css/b/blorf4sde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qbwg7tbug"/><path class="blorf4sde"/></g>`,
		"fallback": "vadivam:circle-fading-play",
	});
}

export default Component;
