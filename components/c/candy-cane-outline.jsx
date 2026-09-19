import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxz7st9fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxz7st9fi"/>`,
		"fallback": "flowbite:candy-cane-outline",
	});
}

export default Component;
