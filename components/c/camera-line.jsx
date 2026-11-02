import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_raj1b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_raj1b_h"/>`,
		"fallback": "mingcute:camera-line",
	});
}

export default Component;
