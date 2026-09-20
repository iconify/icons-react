import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmwimnb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmwimnb1i"/>`,
		"fallback": "mdi:cookie-plus-outline",
	});
}

export default Component;
