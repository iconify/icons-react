import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak2lr7bfb.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak2lr7bfb"/>`,
		"fallback": "zmdi:file-plus",
	});
}

export default Component;
