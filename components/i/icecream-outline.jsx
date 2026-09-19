import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejutc9btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejutc9btw"/>`,
		"fallback": "flowbite:icecream-outline",
	});
}

export default Component;
