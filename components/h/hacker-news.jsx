import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djtzlru6v.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djtzlru6v"/>`,
		"fallback": "fa-brands:hacker-news",
	});
}

export default Component;
