import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w59az85yk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w59az85yk"/>`,
		"fallback": "fluent-emoji-high-contrast:heart-exclamation",
	});
}

export default Component;
