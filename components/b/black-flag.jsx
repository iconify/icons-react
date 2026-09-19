import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuefa0btz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fuefa0btz"/>`,
		"fallback": "fluent-emoji-high-contrast:black-flag",
	});
}

export default Component;
