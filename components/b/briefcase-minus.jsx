import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch5t57bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch5t57bad"/>`,
		"fallback": "pixelarticons:briefcase-minus",
	});
}

export default Component;
