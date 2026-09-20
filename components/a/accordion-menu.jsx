import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xstc6fbzb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xstc6fbzb"/>`,
		"fallback": "vaadin:accordion-menu",
	});
}

export default Component;
