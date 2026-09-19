import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8j66se8u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8j66se8u"/>`,
		"fallback": "fluent-emoji-high-contrast:brick",
	});
}

export default Component;
