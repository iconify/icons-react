import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfco4ib6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfco4ib6p"/>`,
		"fallback": "flowbite:award-outline",
	});
}

export default Component;
