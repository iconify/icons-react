import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv03d2joh.css';

const viewBox = {"width":1472,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv03d2joh"/>`,
		"fallback": "fa:flask",
	});
}

export default Component;
