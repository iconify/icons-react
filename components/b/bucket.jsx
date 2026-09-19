import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu6db3bkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu6db3bkt"/>`,
		"fallback": "fluent-emoji-high-contrast:bucket",
	});
}

export default Component;
