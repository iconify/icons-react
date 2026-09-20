import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr1zc8bty.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr1zc8bty"/>`,
		"fallback": "vaadin:heart",
	});
}

export default Component;
