import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuosljb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuosljb9z"/>`,
		"fallback": "thesvg-color:bugatti",
	});
}

export default Component;
