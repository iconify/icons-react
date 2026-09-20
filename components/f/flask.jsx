import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/som0vccsk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="som0vccsk"/>`,
		"fallback": "vaadin:flask",
	});
}

export default Component;
