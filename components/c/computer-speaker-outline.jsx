import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0vude17c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0vude17c"/>`,
		"fallback": "flowbite:computer-speaker-outline",
	});
}

export default Component;
