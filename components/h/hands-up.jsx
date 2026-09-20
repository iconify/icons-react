import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhjziobee.css';
import '../../css/v/vm1oqwb8w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhjziobee"/><path class="vm1oqwb8w"/>`,
		"fallback": "vaadin:hands-up",
	});
}

export default Component;
