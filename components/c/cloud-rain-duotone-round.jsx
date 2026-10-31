import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3locczqy.css';
import '../../css/m/m-nr0qbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3locczqy"/><path class="m-nr0qbve"/></g>`,
		"fallback": "coolicons:cloud-rain-duotone-round",
	});
}

export default Component;
