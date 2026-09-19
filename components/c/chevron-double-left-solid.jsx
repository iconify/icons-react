import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpi2c7bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpi2c7bge"/>`,
		"fallback": "flowbite:chevron-double-left-solid",
	});
}

export default Component;
