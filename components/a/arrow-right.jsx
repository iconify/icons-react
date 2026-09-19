import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9v66pgsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9v66pgsa"/>`,
		"fallback": "cil:arrow-right",
	});
}

export default Component;
