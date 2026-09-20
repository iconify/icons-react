import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep5jz7ppd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep5jz7ppd"/>`,
		"fallback": "streamline-block:basic-ui-filter",
	});
}

export default Component;
