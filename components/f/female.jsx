import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhjziobee.css';
import '../../css/o/oywhc6eaf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhjziobee"/><path class="oywhc6eaf"/>`,
		"fallback": "vaadin:female",
	});
}

export default Component;
