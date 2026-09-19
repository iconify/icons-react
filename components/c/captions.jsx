import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyy0yv7dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyy0yv7dh"/>`,
		"fallback": "bxs:captions",
	});
}

export default Component;
