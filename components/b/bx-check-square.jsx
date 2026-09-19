import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4-i4ybyx.css';
import '../../css/c/c98at3bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4-i4ybyx"/><path class="c98at3bul"/>`,
		"fallback": "bx:bx-check-square",
	});
}

export default Component;
