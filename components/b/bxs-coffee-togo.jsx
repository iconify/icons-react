import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds-9jmb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds-9jmb7r"/>`,
		"fallback": "bx:bxs-coffee-togo",
	});
}

export default Component;
