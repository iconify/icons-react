import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdhgpcc6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rdhgpcc6u"/>`,
		"fallback": "griddy-icons:calendar-minus",
	});
}

export default Component;
