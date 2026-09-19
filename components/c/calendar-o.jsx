import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f56opvbcd.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f56opvbcd"/>`,
		"fallback": "fa:calendar-o",
	});
}

export default Component;
