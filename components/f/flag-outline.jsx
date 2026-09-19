import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvi8j9ioj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvi8j9ioj"/>`,
		"fallback": "flowbite:flag-outline",
	});
}

export default Component;
