import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bylqtsb2e.css';
import '../../css/m/m0bcik1ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bylqtsb2e secondary"/><path class="m0bcik1ho primary"/></g>`,
		"fallback": "iconaut:ai-chip-duotone",
	});
}

export default Component;
