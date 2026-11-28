import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5tnbacih.css';
import '../../css/j/jrqx5mime.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5tnbacih secondary"/><path class="jrqx5mime primary"/></g>`,
		"fallback": "iconaut:image-align-left-duotone",
	});
}

export default Component;
