import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c056y0bpm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c056y0bpm"/>`,
		"fallback": "garden:chevron-double-down-stroke-16",
	});
}

export default Component;
