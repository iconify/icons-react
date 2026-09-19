import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5c7b29av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5c7b29av"/>`,
		"fallback": "griddy-icons:calendar-time-filled",
	});
}

export default Component;
