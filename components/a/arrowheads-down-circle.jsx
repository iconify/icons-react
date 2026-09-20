import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4qh7ybap.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4qh7ybap"/>`,
		"fallback": "streamline-block:arrowheads-down-circle",
	});
}

export default Component;
