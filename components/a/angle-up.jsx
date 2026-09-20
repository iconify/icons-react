import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq-_58_ra.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq-_58_ra"/>`,
		"fallback": "vaadin:angle-up",
	});
}

export default Component;
