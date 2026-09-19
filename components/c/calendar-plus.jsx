import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxnh6z4ii.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxnh6z4ii"/>`,
		"fallback": "fa7-regular:calendar-plus",
	});
}

export default Component;
