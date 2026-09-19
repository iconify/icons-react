import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovvyb8bxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovvyb8bxl"/>`,
		"fallback": "garden:clipboard-check-stroke-16",
	});
}

export default Component;
