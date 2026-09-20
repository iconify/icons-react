import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-twh6bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-twh6bjo"/>`,
		"fallback": "mi:circle-add",
	});
}

export default Component;
