import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6_92fb_t.css';
import '../../css/i/in41_ubsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6_92fb_t"/><path class="in41_ubsa"/></g>`,
		"fallback": "keyline-icons:eraser-two-tone",
	});
}

export default Component;
