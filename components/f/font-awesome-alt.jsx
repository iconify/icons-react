import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc7quy63x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc7quy63x"/>`,
		"fallback": "la:font-awesome-alt",
	});
}

export default Component;
