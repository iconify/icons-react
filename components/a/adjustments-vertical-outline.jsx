import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngw-7mbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngw-7mbus"/>`,
		"fallback": "flowbite:adjustments-vertical-outline",
	});
}

export default Component;
