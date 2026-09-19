import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ufp8b5m.css';
import '../../css/w/wqbkv8u2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ufp8b5m"/><path class="wqbkv8u2i"/>`,
		"fallback": "bx:bx-caret-down-circle",
	});
}

export default Component;
