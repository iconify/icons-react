import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j78zgrbxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j78zgrbxb"/>`,
		"fallback": "dashicons:format-status",
	});
}

export default Component;
