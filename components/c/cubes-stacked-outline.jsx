import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra5zdu2wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra5zdu2wf"/>`,
		"fallback": "flowbite:cubes-stacked-outline",
	});
}

export default Component;
