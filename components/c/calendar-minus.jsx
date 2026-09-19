import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbnmxkbgr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbnmxkbgr"/>`,
		"fallback": "fa6-regular:calendar-minus",
	});
}

export default Component;
