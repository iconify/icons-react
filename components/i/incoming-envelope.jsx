import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9sxgvk4v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9sxgvk4v"/>`,
		"fallback": "fluent-emoji-high-contrast:incoming-envelope",
	});
}

export default Component;
