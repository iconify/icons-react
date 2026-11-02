import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jie0obcou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jie0obcou"/>`,
		"fallback": "mingcute:bird-fill",
	});
}

export default Component;
