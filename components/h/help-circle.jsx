import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flip2ibmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flip2ibmh"/>`,
		"fallback": "ci:help-circle",
	});
}

export default Component;
