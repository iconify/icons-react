import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waoq3bcbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waoq3bcbm"/>`,
		"fallback": "flowbite:apple-full-outline",
	});
}

export default Component;
