import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/norsy3a8s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="norsy3a8s"/>`,
		"fallback": "la:hacker-news-square",
	});
}

export default Component;
