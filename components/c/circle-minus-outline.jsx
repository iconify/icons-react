import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twz9dj_yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twz9dj_yf"/>`,
		"fallback": "flowbite:circle-minus-outline",
	});
}

export default Component;
