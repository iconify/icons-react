import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7ybh6b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7ybh6b3x"/>`,
		"fallback": "mdi:comment-text-multiple-outline",
	});
}

export default Component;
