import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ci7lqxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1ci7lqxy"/>`,
		"fallback": "mingcute:exit-door-line",
	});
}

export default Component;
