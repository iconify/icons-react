import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5fqdlybr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5fqdlybr"/>`,
		"fallback": "griddy-icons:calendar-dates-filled",
	});
}

export default Component;
