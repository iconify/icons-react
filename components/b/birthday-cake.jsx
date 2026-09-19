import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w25qbkz2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w25qbkz2x"/>`,
		"fallback": "cil:birthday-cake",
	});
}

export default Component;
