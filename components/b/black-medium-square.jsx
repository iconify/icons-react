import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbn3v1bqb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbn3v1bqb"/>`,
		"fallback": "fluent-emoji-high-contrast:black-medium-square",
	});
}

export default Component;
