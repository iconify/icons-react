import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f58oytbse.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f58oytbse"/>`,
		"fallback": "fa-brands:hacker-news-square",
	});
}

export default Component;
