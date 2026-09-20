import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r49e0obzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r49e0obzb"/>`,
		"fallback": "mdi:book-remove-outline",
	});
}

export default Component;
