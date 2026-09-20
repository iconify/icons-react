import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_0a0bxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ae_0a0bxl"/>`,
		"fallback": "streamline-block:arrowheads-right",
	});
}

export default Component;
