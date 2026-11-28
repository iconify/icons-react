import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5tnbacih.css';
import '../../css/p/pb51f0bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5tnbacih secondary"/><path class="pb51f0bjd primary"/></g>`,
		"fallback": "iconaut:image-wrap-left-duotone",
	});
}

export default Component;
