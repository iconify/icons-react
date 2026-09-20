import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vt-o15bxl.css';
import '../../css/a/aku065pvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vt-o15bxl"/><path class="aku065pvk"/></g>`,
		"fallback": "keyline-icons:grid-circles-x-two-tone",
	});
}

export default Component;
