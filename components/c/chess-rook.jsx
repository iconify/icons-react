import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh1k_mbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh1k_mbqj"/>`,
		"fallback": "noviair-light:chess-rook",
	});
}

export default Component;
