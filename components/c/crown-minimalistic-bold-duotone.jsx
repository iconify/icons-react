import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvrua-8ra.css';
import '../../css/v/vmpp27nul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uvrua-8ra"/><path class="vmpp27nul"/></g>`,
		"fallback": "solar:crown-minimalistic-bold-duotone",
	});
}

export default Component;
