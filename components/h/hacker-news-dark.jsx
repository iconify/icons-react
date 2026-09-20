import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4-p-yb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4-p-yb3t"/>`,
		"fallback": "selfhst:hacker-news-dark",
	});
}

export default Component;
