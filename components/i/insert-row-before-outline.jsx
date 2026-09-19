import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh78-0bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh78-0bcc"/>`,
		"fallback": "flowbite:insert-row-before-outline",
	});
}

export default Component;
