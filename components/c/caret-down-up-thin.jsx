import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q16dfk8ej.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q16dfk8ej"/>`,
		"fallback": "pullo:caret-down-up-thin",
	});
}

export default Component;
