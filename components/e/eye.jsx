import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f95mjtb9t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f95mjtb9t"/>`,
		"fallback": "vaadin:eye",
	});
}

export default Component;
