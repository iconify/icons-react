import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6ug91b-i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6ug91b-i"/>`,
		"fallback": "la:arrow-alt-circle-down",
	});
}

export default Component;
