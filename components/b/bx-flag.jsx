import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w67l7eb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w67l7eb3p"/>`,
		"fallback": "bx:bx-flag",
	});
}

export default Component;
