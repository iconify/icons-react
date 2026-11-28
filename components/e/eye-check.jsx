import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/falq6obii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="falq6obii"/>`,
		"fallback": "noviair-light:eye-check",
	});
}

export default Component;
