import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j625-e5sy.css';
import '../../css/e/expqfsbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j625-e5sy secondary"/><path class="expqfsbaz primary"/></g>`,
		"fallback": "iconaut:calendar-clock-duotone",
	});
}

export default Component;
