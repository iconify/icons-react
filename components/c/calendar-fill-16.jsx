import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siks4l5qe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siks4l5qe"/>`,
		"fallback": "garden:calendar-fill-16",
	});
}

export default Component;
