import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdtxzio9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdtxzio9z"/>`,
		"fallback": "fluent-emoji-flat:brown-square",
	});
}

export default Component;
