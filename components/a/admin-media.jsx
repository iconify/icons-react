import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvy4j9bgb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvy4j9bgb"/>`,
		"fallback": "dashicons:admin-media",
	});
}

export default Component;
