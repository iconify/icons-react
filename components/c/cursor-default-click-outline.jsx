import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh-0l9b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh-0l9b2u"/>`,
		"fallback": "mdi:cursor-default-click-outline",
	});
}

export default Component;
