import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lycp83xtc.css';
import '../../css/p/pon60m2do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lycp83xtc"/><path class="pon60m2do"/></g>`,
		"fallback": "mynaui:backpack-solid",
	});
}

export default Component;
