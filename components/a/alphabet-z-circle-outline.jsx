import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umpeo9btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umpeo9btm"/>`,
		"fallback": "mdi:alphabet-z-circle-outline",
	});
}

export default Component;
