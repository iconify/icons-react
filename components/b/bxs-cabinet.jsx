import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_b2_4b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_b2_4b1k"/>`,
		"fallback": "bx:bxs-cabinet",
	});
}

export default Component;
