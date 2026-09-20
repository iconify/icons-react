import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umt5eeb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umt5eeb1r"/>`,
		"fallback": "uim:bookmark",
	});
}

export default Component;
