import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfky60b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfky60b3j"/>`,
		"fallback": "flowbite:cell-attributes-outline",
	});
}

export default Component;
