import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e78vbih2x.css';
import '../../css/w/wqbkv8u2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e78vbih2x"/><path class="wqbkv8u2i"/>`,
		"fallback": "bx:bx-plus-circle",
	});
}

export default Component;
