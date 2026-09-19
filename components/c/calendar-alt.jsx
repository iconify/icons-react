import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_1hckbqf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_1hckbqf"/>`,
		"fallback": "fa-solid:calendar-alt",
	});
}

export default Component;
