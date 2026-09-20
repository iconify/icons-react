import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wnqcukbpe.css';
import '../../css/t/tv2lf6bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wnqcukbpe"/><path clip-rule="evenodd" class="tv2lf6bup"/></g>`,
		"fallback": "solar:archive-up-minimalistic-bold-duotone",
	});
}

export default Component;
