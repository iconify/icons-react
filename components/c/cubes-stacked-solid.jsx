import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmz7stm5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmz7stm5r"/>`,
		"fallback": "flowbite:cubes-stacked-solid",
	});
}

export default Component;
