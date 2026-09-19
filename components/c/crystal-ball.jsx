import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo8f5qb_w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo8f5qb_w"/>`,
		"fallback": "fluent-emoji-high-contrast:crystal-ball",
	});
}

export default Component;
