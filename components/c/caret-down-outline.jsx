import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4przac8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4przac8o"/>`,
		"fallback": "flowbite:caret-down-outline",
	});
}

export default Component;
