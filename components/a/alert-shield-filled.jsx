import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flug27b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flug27b3i"/>`,
		"fallback": "boxicons:alert-shield-filled",
	});
}

export default Component;
