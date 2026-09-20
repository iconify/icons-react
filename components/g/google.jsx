import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc1lwwb8b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc1lwwb8b"/>`,
		"fallback": "la:google",
	});
}

export default Component;
