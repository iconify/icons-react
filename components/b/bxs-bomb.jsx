import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crn9mubct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crn9mubct"/>`,
		"fallback": "bx:bxs-bomb",
	});
}

export default Component;
