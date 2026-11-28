import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r99_vkhai.css';
import '../../css/p/p1otw-skj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r99_vkhai secondary"/><path class="p1otw-skj primary"/></g>`,
		"fallback": "iconaut:grid-2x2-x-duotone",
	});
}

export default Component;
