import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogdeiackf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogdeiackf"/>`,
		"fallback": "flowbite:hourglass-outline",
	});
}

export default Component;
