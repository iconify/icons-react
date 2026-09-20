import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wnqcukbpe.css';
import '../../css/n/n72wzqt_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wnqcukbpe"/><path clip-rule="evenodd" class="n72wzqt_r"/></g>`,
		"fallback": "solar:archive-down-minimalistic-bold-duotone",
	});
}

export default Component;
