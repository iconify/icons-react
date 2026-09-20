import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d7bpunbie.css';
import '../../css/f/f05uqsblk.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="d7bpunbie"/><path class="f05uqsblk"/></g>`,
		"fallback": "system-uicons:calendar-date",
	});
}

export default Component;
