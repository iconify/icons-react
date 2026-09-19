import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0r6-xtig.css';

const viewBox = {"width":610,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0r6-xtig"/>`,
		"fallback": "il:drop",
	});
}

export default Component;
