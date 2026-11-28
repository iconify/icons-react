import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0izvbcnb.css';
import '../../css/p/pk_1peb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u0izvbcnb"/><path class="pk_1peb6p primary"/></g>`,
		"fallback": "iconaut:hd-duotone",
	});
}

export default Component;
