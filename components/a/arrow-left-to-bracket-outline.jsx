import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtohnabyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtohnabyy"/>`,
		"fallback": "flowbite:arrow-left-to-bracket-outline",
	});
}

export default Component;
