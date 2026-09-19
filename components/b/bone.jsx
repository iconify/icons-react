import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh2_1rb4m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh2_1rb4m"/>`,
		"fallback": "fluent-emoji-high-contrast:bone",
	});
}

export default Component;
