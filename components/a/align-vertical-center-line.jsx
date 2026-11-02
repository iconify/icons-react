import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvitzkb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvitzkb8l"/>`,
		"fallback": "mingcute:align-vertical-center-line",
	});
}

export default Component;
