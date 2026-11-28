import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htwqw0bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htwqw0bda primary"/>`,
		"fallback": "iconaut:arrow-left-through-line-duotone",
	});
}

export default Component;
