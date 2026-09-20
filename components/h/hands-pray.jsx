import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb80f6bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb80f6bsd"/>`,
		"fallback": "mdi:hands-pray",
	});
}

export default Component;
