import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1hn373cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1hn373cd"/>`,
		"fallback": "iconamoon:comment-close-light",
	});
}

export default Component;
