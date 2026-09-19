import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf3sejcfw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf3sejcfw"/>`,
		"fallback": "fluent-emoji-high-contrast:chess-pawn",
	});
}

export default Component;
