import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k383-3bko.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k383-3bko"/>`,
		"fallback": "vaadin:align-center",
	});
}

export default Component;
