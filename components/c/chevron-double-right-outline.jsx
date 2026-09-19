import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l42_9wqpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l42_9wqpv"/>`,
		"fallback": "flowbite:chevron-double-right-outline",
	});
}

export default Component;
