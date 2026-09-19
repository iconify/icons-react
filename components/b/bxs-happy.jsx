import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cifknp9wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cifknp9wl"/>`,
		"fallback": "bx:bxs-happy",
	});
}

export default Component;
