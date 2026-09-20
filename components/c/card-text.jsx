import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5al98e6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5al98e6o"/>`,
		"fallback": "pixelarticons:card-text",
	});
}

export default Component;
