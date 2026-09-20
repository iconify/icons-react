import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx8sjhbvb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx8sjhbvb"/>`,
		"fallback": "vaadin:arrow-circle-left",
	});
}

export default Component;
