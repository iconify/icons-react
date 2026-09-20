import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7r--kwbe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7r--kwbe"/>`,
		"fallback": "vaadin:grid-bevel",
	});
}

export default Component;
