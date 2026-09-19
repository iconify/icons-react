import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obybe6j6t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obybe6j6t"/>`,
		"fallback": "fluent-emoji-high-contrast:anatomical-heart",
	});
}

export default Component;
