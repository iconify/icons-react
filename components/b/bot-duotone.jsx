import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8ai6fnjp.css';
import '../../css/d/d733vib4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o8ai6fnjp secondary"/><path class="d733vib4q primary"/></g>`,
		"fallback": "iconaut:bot-duotone",
	});
}

export default Component;
