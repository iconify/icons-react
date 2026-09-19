import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dehmu3pqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dehmu3pqj"/>`,
		"fallback": "fluent-emoji-high-contrast:blue-square",
	});
}

export default Component;
