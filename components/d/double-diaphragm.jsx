import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0i6kdbbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0i6kdbbd"/>`,
		"fallback": "game-icons:double-diaphragm",
	});
}

export default Component;
