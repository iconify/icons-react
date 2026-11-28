import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo7qu8btz.css';
import '../../css/z/zu68c_b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uo7qu8btz"/><path class="primary zu68c_b5x"/></g>`,
		"fallback": "iconaut:bell-duotone",
	});
}

export default Component;
