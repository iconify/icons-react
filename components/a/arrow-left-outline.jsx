import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oon9d5b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oon9d5b_v"/>`,
		"fallback": "flowbite:arrow-left-outline",
	});
}

export default Component;
