import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydg3l3bpm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydg3l3bpm"/>`,
		"fallback": "bi:3-circle-fill",
	});
}

export default Component;
