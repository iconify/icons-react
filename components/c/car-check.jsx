import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ream2rr8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ream2rr8h"/>`,
		"fallback": "noviair-light:car-check",
	});
}

export default Component;
