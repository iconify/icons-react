import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7nqu2bya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7nqu2bya"/>`,
		"fallback": "fluent-emoji-high-contrast:boomerang",
	});
}

export default Component;
