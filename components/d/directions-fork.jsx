import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx3uhzkvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx3uhzkvz"/>`,
		"fallback": "mdi:directions-fork",
	});
}

export default Component;
