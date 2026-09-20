import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4d9s_b0i.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4d9s_b0i"/>`,
		"fallback": "wi:day-cloudy-windy",
	});
}

export default Component;
