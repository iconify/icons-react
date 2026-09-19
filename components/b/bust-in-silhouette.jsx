import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euq42txjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euq42txjd"/>`,
		"fallback": "fluent-emoji-high-contrast:bust-in-silhouette",
	});
}

export default Component;
