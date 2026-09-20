import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izecqj6hj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izecqj6hj"/>`,
		"fallback": "la:behance",
	});
}

export default Component;
