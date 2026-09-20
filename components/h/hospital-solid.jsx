import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff6qa3bzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff6qa3bzz"/>`,
		"fallback": "la:hospital-solid",
	});
}

export default Component;
