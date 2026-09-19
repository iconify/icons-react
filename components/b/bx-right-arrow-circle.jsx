import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktjwxgw4q.css';
import '../../css/o/oyj3-46ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktjwxgw4q"/><path class="oyj3-46ua"/>`,
		"fallback": "bx:bx-right-arrow-circle",
	});
}

export default Component;
