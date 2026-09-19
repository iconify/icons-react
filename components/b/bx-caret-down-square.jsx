import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ufp8b5m.css';
import '../../css/c/c98at3bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ufp8b5m"/><path class="c98at3bul"/>`,
		"fallback": "bx:bx-caret-down-square",
	});
}

export default Component;
