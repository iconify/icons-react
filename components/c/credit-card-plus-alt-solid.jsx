import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eelpxyzcx.css';
import '../../css/t/tg_3r0lud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eelpxyzcx"/><path class="tg_3r0lud"/></g>`,
		"fallback": "flowbite:credit-card-plus-alt-solid",
	});
}

export default Component;
