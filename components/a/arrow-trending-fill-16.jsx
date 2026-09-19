import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thbks7bmf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thbks7bmf"/>`,
		"fallback": "garden:arrow-trending-fill-16",
	});
}

export default Component;
