import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7qx85bwi.css';
import '../../css/e/ewkztrbus.css';
import '../../css/x/x4pwz20fz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7qx85bwi"/><path class="ewkztrbus"/><path class="x4pwz20fz"/>`,
		"fallback": "energy-icons:calendar-x-20-bold",
	});
}

export default Component;
