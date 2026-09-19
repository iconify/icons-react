import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irauy12_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irauy12_k"/>`,
		"fallback": "bx:bx-check",
	});
}

export default Component;
