import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdh9nsb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdh9nsb5z"/>`,
		"fallback": "mingcute:clipboard-fill",
	});
}

export default Component;
