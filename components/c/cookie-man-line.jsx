import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocyq8iybf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocyq8iybf"/>`,
		"fallback": "mingcute:cookie-man-line",
	});
}

export default Component;
