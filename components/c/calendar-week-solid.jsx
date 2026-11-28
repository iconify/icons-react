import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt_2i8kgc.css';
import '../../css/f/fpjxls3nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mt_2i8kgc"/><path class="fpjxls3nl"/></g>`,
		"fallback": "iconaut:calendar-week-solid",
	});
}

export default Component;
