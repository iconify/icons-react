import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuqqicc9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuqqicc9y"/>`,
		"fallback": "heroicons:cursor-arrow-ripple",
	});
}

export default Component;
