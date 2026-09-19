import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4u2r3x1n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4u2r3x1n"/>`,
		"fallback": "at-icons:archive-arrow-down",
	});
}

export default Component;
