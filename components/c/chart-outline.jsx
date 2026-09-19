import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci8hcacek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci8hcacek"/>`,
		"fallback": "flowbite:chart-outline",
	});
}

export default Component;
