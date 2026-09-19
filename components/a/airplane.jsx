import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t059a5r9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t059a5r9u"/>`,
		"fallback": "fluent-emoji-high-contrast:airplane",
	});
}

export default Component;
