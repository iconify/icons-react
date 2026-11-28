import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kamzc8the.css';
import '../../css/h/h05sef-cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kamzc8the"/><path class="h05sef-cm"/></g>`,
		"fallback": "iconaut:ai-chip-solid",
	});
}

export default Component;
