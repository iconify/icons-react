import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q378etc0v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q378etc0v"/>`,
		"fallback": "la:graduation-cap-solid",
	});
}

export default Component;
