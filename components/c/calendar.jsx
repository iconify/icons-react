import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rx5m3bx-a.css';
import '../../css/j/javko1wll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="rx5m3bx-a"/><path class="javko1wll"/></g>`,
		"fallback": "feather:calendar",
	});
}

export default Component;
