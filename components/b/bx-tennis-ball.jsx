import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0fb4f33k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0fb4f33k"/>`,
		"fallback": "bx:bx-tennis-ball",
	});
}

export default Component;
