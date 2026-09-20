import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j72t7j6ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j72t7j6ih"/>`,
		"fallback": "mynaui:chart-bar-increasing-solid",
	});
}

export default Component;
