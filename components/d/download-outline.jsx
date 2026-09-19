import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn47u1y8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn47u1y8z"/>`,
		"fallback": "flowbite:download-outline",
	});
}

export default Component;
