import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_q9sfwij.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_q9sfwij"/>`,
		"fallback": "ix:capacity-pen-filled",
	});
}

export default Component;
