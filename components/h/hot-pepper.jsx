import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fota-cc9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fota-cc9k"/>`,
		"fallback": "fluent-emoji-high-contrast:hot-pepper",
	});
}

export default Component;
