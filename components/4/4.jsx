import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4xrz4bit.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4xrz4bit"/>`,
		"fallback": "fa6-solid:4",
	});
}

export default Component;
