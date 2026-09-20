import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm5p7nbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm5p7nbqb"/>`,
		"fallback": "mdi:currency-php",
	});
}

export default Component;
