import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7qx85bwi.css';
import '../../css/s/sgp4cobry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7qx85bwi"/><path class="sgp4cobry"/>`,
		"fallback": "energy-icons:calendar-check-20-bold",
	});
}

export default Component;
