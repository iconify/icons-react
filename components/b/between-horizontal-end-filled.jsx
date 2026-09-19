import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6bk4pu6o.css';
import '../../css/j/j7r8t5bzq.css';
import '../../css/g/gu8gak4xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6bk4pu6o"/><rect class="j7r8t5bzq"/><rect class="gu8gak4xx"/>`,
		"fallback": "boxicons:between-horizontal-end-filled",
	});
}

export default Component;
