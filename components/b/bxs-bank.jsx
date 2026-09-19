import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txy4c3lcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txy4c3lcb"/>`,
		"fallback": "bx:bxs-bank",
	});
}

export default Component;
