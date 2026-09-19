import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb670dbvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb670dbvo"/>`,
		"fallback": "fa-solid:chess-queen",
	});
}

export default Component;
