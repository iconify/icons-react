import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrn2l7b8c.css';
import '../../css/r/r0ov69bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary yrn2l7b8c"/><path class="primary r0ov69bcv"/></g>`,
		"fallback": "iconaut:folders-duotone",
	});
}

export default Component;
