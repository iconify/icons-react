import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8kaj0xhr.css';

const viewBox = {"width":416,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8kaj0xhr"/>`,
		"fallback": "file-icons:flutter",
	});
}

export default Component;
