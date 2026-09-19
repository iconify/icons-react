import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qksbz5ces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qksbz5ces"/>`,
		"fallback": "flowbite:envelope-outline",
	});
}

export default Component;
