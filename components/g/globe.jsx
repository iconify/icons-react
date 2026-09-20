import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmiy7m5fl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmiy7m5fl"/>`,
		"fallback": "vaadin:globe",
	});
}

export default Component;
