import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1lneq22n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1lneq22n"/>`,
		"fallback": "rivet-icons:calendar-solid",
	});
}

export default Component;
