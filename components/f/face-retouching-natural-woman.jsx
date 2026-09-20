import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j13k_rbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j13k_rbpp"/>`,
		"fallback": "mdi:face-retouching-natural-woman",
	});
}

export default Component;
