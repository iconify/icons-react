import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-9jjtbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-9jjtbuo"/>`,
		"fallback": "mingcute:flag-4-fill",
	});
}

export default Component;
