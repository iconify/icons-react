import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kar2cvbce.css';
import '../../css/c/c0ko__b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kar2cvbce secondary"/><path class="c0ko__b4n primary"/></g>`,
		"fallback": "iconaut:buildings-duotone",
	});
}

export default Component;
