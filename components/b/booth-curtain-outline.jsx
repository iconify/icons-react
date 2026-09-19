import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqsabac0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqsabac0e"/>`,
		"fallback": "flowbite:booth-curtain-outline",
	});
}

export default Component;
