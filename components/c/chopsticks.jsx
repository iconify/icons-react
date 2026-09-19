import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf4dd7bwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf4dd7bwb"/>`,
		"fallback": "fluent-emoji-high-contrast:chopsticks",
	});
}

export default Component;
