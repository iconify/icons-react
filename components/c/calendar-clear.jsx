import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x92ld8t4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x92ld8t4z"/>`,
		"fallback": "famicons:calendar-clear",
	});
}

export default Component;
