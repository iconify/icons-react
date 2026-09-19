import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki14w9bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki14w9bub"/>`,
		"fallback": "bx:bxs-camera-off",
	});
}

export default Component;
