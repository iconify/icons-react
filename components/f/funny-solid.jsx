import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gc6y7dbra.css';
import '../../css/a/ae6wzcttq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gc6y7dbra"/><path class="ae6wzcttq"/></g>`,
		"fallback": "mynaui:funny-solid",
	});
}

export default Component;
