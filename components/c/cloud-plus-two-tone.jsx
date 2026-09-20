import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vevmidywk.css';
import '../../css/r/ro5o2ffpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vevmidywk"/><path class="ro5o2ffpk"/></g>`,
		"fallback": "keyline-icons:cloud-plus-two-tone",
	});
}

export default Component;
