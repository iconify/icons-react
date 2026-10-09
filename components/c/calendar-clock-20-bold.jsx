import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5wmwdblu.css';
import '../../css/k/kvqjz7b_z.css';
import '../../css/u/udpsv_2mb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5wmwdblu"/><path class="kvqjz7b_z"/><path class="udpsv_2mb"/>`,
		"fallback": "energy-icons:calendar-clock-20-bold",
	});
}

export default Component;
