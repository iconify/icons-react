import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ovwm4ub3k.css';
import '../../css/u/uw5p3bcjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ovwm4ub3k"/><path clip-rule="evenodd" class="uw5p3bcjt"/></g>`,
		"fallback": "heroicons:bell-alert-solid",
	});
}

export default Component;
