import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa4o83b8l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa4o83b8l"/>`,
		"fallback": "la:etsy",
	});
}

export default Component;
