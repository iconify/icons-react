import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6fj2acav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6fj2acav"/>`,
		"fallback": "bx:bx-health",
	});
}

export default Component;
