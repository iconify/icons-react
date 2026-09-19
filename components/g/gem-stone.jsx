import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8n6k3ysb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8n6k3ysb"/>`,
		"fallback": "fluent-emoji-high-contrast:gem-stone",
	});
}

export default Component;
