import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-39p3b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-39p3b7m"/>`,
		"fallback": "bx:bxs-brightness",
	});
}

export default Component;
