import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teeg0uhoo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teeg0uhoo"/>`,
		"fallback": "fluent-emoji-flat:blue-square",
	});
}

export default Component;
