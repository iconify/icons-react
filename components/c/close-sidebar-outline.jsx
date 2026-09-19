import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no1d-ebdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no1d-ebdi"/>`,
		"fallback": "flowbite:close-sidebar-outline",
	});
}

export default Component;
