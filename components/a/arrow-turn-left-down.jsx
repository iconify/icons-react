import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj3dekbyz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj3dekbyz"/>`,
		"fallback": "at-icons:arrow-turn-left-down",
	});
}

export default Component;
