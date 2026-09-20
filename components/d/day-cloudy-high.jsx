import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aays3xbed.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aays3xbed"/>`,
		"fallback": "wi:day-cloudy-high",
	});
}

export default Component;
