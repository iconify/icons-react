import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufw0hfimz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufw0hfimz"/>`,
		"fallback": "flowbite:delete-column-outline",
	});
}

export default Component;
