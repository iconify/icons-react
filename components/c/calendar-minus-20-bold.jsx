import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5wmwdblu.css';
import '../../css/k/kvqjz7b_z.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5wmwdblu"/><path class="kvqjz7b_z"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:calendar-minus-20-bold",
	});
}

export default Component;
