import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9pftxwov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9pftxwov"/>`,
		"fallback": "fluent-emoji-high-contrast:hollow-red-circle",
	});
}

export default Component;
