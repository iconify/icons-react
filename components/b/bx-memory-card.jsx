import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pij_c5y_o.css';
import '../../css/g/g6bv-gb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pij_c5y_o"/><path class="g6bv-gb_k"/>`,
		"fallback": "bx:bx-memory-card",
	});
}

export default Component;
