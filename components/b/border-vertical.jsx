import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff2d-me7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff2d-me7b"/>`,
		"fallback": "mdi-light:border-vertical",
	});
}

export default Component;
