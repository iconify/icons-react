import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/z/zdumlyb8f.css';
import '../../css/m/m0pti6bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path class="zdumlyb8f"/><path class="m0pti6bea"/></g>`,
		"fallback": "solar:chat-square-line-bold-duotone",
	});
}

export default Component;
