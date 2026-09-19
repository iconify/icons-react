import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soz38ybee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soz38ybee"/>`,
		"fallback": "flowbite:carrot-outline",
	});
}

export default Component;
