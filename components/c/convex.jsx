import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r12c-3b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r12c-3b5y"/>`,
		"fallback": "simple-icons:convex",
	});
}

export default Component;
