import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p8vwwevsf.css';
import '../../css/w/wnqcukbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p8vwwevsf"/><path class="wnqcukbpe"/></g>`,
		"fallback": "solar:archive-minimalistic-bold-duotone",
	});
}

export default Component;
