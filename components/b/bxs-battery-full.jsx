import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0nd1b7at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0nd1b7at"/>`,
		"fallback": "bx:bxs-battery-full",
	});
}

export default Component;
