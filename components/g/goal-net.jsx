import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8nupmb6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8nupmb6o"/>`,
		"fallback": "fluent-emoji-high-contrast:goal-net",
	});
}

export default Component;
