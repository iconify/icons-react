import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-xz9t4wa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-xz9t4wa"/>`,
		"fallback": "streamline-block:arrowheads-down-left-chevron-circle",
	});
}

export default Component;
