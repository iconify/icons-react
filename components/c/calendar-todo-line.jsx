import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7c5r0k6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7c5r0k6w"/>`,
		"fallback": "ri:calendar-todo-line",
	});
}

export default Component;
