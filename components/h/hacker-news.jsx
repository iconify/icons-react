import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lngqecb0r.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lngqecb0r"/>`,
		"fallback": "ps:hacker-news",
	});
}

export default Component;
