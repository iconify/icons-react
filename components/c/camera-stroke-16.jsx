import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud1m1c5-w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud1m1c5-w"/>`,
		"fallback": "garden:camera-stroke-16",
	});
}

export default Component;
