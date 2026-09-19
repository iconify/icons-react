import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdm4mjb0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdm4mjb0h"/>`,
		"fallback": "garden:chevron-double-up-stroke-16",
	});
}

export default Component;
