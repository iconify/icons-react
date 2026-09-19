import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf603ubza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf603ubza"/>`,
		"fallback": "flowbite:champagne-glasses-outline",
	});
}

export default Component;
