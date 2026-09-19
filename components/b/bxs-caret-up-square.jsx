import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdrc77bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdrc77bra"/>`,
		"fallback": "bx:bxs-caret-up-square",
	});
}

export default Component;
