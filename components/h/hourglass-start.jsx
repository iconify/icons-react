import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2jymg60n.css';
import '../../css/w/w_nq73a6c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2jymg60n"/><path class="w_nq73a6c"/>`,
		"fallback": "vaadin:hourglass-start",
	});
}

export default Component;
