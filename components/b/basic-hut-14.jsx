import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulqrrq9dh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulqrrq9dh"/>`,
		"fallback": "osmic:basic-hut-14",
	});
}

export default Component;
