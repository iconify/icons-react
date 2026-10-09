import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0v1yf7ii.css';
import '../../css/u/u_sp4-r9c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0v1yf7ii"/><path class="u_sp4-r9c"/>`,
		"fallback": "energy-icons:bookmark-check-20",
	});
}

export default Component;
