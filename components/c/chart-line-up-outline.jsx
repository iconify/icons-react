import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubj1bvaep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubj1bvaep"/>`,
		"fallback": "flowbite:chart-line-up-outline",
	});
}

export default Component;
