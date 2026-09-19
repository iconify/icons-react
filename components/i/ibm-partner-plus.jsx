import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sftnd-fer.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sftnd-fer"/>`,
		"fallback": "carbon:ibm-partner-plus",
	});
}

export default Component;
