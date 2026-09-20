import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-6j63-le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-6j63-le"/>`,
		"fallback": "mdi:file-cancel-outline",
	});
}

export default Component;
