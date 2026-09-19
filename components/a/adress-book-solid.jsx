import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csrk5ubwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="csrk5ubwm"/>`,
		"fallback": "flowbite:adress-book-solid",
	});
}

export default Component;
