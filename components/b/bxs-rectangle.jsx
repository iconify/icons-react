import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cex82_b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cex82_b_b"/>`,
		"fallback": "bx:bxs-rectangle",
	});
}

export default Component;
