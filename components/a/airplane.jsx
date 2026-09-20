import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmj4gbbov.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmj4gbbov"/>`,
		"fallback": "pepicons-pencil:airplane",
	});
}

export default Component;
