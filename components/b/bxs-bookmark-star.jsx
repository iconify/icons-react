import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0ch7qbai.css';
import '../../css/b/bjm4ztbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0ch7qbai"/><path class="bjm4ztbae"/>`,
		"fallback": "bx:bxs-bookmark-star",
	});
}

export default Component;
