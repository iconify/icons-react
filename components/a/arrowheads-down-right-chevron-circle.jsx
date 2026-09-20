import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3uraec-u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3uraec-u"/>`,
		"fallback": "streamline-block:arrowheads-down-right-chevron-circle",
	});
}

export default Component;
