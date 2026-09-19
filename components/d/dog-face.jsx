import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otc8jfbmx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="otc8jfbmx"/>`,
		"fallback": "fluent-emoji-high-contrast:dog-face",
	});
}

export default Component;
