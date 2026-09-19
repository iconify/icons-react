import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/een1a4tir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="een1a4tir"/>`,
		"fallback": "flowbite:chalkboard-user-outline",
	});
}

export default Component;
