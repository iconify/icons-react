import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq7x_9fin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq7x_9fin"/>`,
		"fallback": "mingcute:ease-out-fill",
	});
}

export default Component;
