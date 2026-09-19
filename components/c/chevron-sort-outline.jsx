import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_77jkb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_77jkb4e"/>`,
		"fallback": "flowbite:chevron-sort-outline",
	});
}

export default Component;
