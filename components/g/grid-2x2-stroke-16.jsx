import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i07ac8bay.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i07ac8bay"/>`,
		"fallback": "garden:grid-2x2-stroke-16",
	});
}

export default Component;
