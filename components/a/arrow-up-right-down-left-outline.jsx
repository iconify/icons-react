import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k13mh-w9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k13mh-w9f"/>`,
		"fallback": "flowbite:arrow-up-right-down-left-outline",
	});
}

export default Component;
