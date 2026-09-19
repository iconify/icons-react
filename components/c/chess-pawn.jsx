import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvvxpzzju.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvvxpzzju"/>`,
		"fallback": "fa7-solid:chess-pawn",
	});
}

export default Component;
