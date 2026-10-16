import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4zy9ybio.css';
import '../../css/g/gw-flvwxj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4zy9ybio"/><path class="gw-flvwxj"/>`,
		"fallback": "energy-icons:heating-schedule-20-bold",
	});
}

export default Component;
