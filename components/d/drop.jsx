import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtd0qyxek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtd0qyxek"/>`,
		"fallback": "mynaui:drop",
	});
}

export default Component;
