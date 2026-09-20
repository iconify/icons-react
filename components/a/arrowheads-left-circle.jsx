import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1t22kb3w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1t22kb3w"/>`,
		"fallback": "streamline-block:arrowheads-left-circle",
	});
}

export default Component;
