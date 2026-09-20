import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgv26-uju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgv26-uju"/>`,
		"fallback": "vaadin:arrow-circle-down",
	});
}

export default Component;
