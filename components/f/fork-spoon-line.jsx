import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-7b-6vtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-7b-6vtj"/>`,
		"fallback": "mingcute:fork-spoon-line",
	});
}

export default Component;
