import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vt-o15bxl.css';
import '../../css/s/s4y-3xbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vt-o15bxl"/><path class="s4y-3xbwz"/></g>`,
		"fallback": "keyline-icons:grid-circles-x-duotone",
	});
}

export default Component;
