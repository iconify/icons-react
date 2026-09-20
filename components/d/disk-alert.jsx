import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe3omq5yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe3omq5yn"/>`,
		"fallback": "mdi:disk-alert",
	});
}

export default Component;
