import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y33_9cd0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y33_9cd0e"/>`,
		"fallback": "mdi:bike",
	});
}

export default Component;
