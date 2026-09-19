import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hijfh7elq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hijfh7elq"/>`,
		"fallback": "flowbite:incoming-call-outline",
	});
}

export default Component;
