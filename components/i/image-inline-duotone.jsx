import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxn-rgb8k.css';
import '../../css/u/u11jhlk4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pxn-rgb8k secondary"/><path class="primary u11jhlk4u"/></g>`,
		"fallback": "iconaut:image-inline-duotone",
	});
}

export default Component;
