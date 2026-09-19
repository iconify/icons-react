import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aidrj0qgn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aidrj0qgn"/>`,
		"fallback": "fluent-emoji-high-contrast:droplet",
	});
}

export default Component;
