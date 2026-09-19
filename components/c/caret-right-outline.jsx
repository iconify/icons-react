import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fio84ly5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fio84ly5t"/>`,
		"fallback": "flowbite:caret-right-outline",
	});
}

export default Component;
