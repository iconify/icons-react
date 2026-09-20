import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wnqcukbpe.css';
import '../../css/i/i3c8uxhvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wnqcukbpe"/><path clip-rule="evenodd" class="i3c8uxhvl"/></g>`,
		"fallback": "solar:archive-minimalistic-close-bold-duotone",
	});
}

export default Component;
