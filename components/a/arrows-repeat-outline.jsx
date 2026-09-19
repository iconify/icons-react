import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igi-6tbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igi-6tbii"/>`,
		"fallback": "flowbite:arrows-repeat-outline",
	});
}

export default Component;
