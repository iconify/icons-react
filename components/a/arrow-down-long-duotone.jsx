import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huoc5pnyp.css';
import '../../css/h/h1b6u-lck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="huoc5pnyp secondary"/><path class="h1b6u-lck primary"/></g>`,
		"fallback": "iconaut:arrow-down-long-duotone",
	});
}

export default Component;
