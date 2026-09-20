import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imt9l1hvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imt9l1hvr"/>`,
		"fallback": "vaadin:chevron-circle-down",
	});
}

export default Component;
