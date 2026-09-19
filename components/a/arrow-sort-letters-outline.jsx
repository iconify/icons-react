import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsf7ge_8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsf7ge_8v"/>`,
		"fallback": "flowbite:arrow-sort-letters-outline",
	});
}

export default Component;
