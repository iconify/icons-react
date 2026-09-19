import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccnad6bsx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccnad6bsx"/>`,
		"fallback": "fluent-emoji-high-contrast:ferris-wheel",
	});
}

export default Component;
