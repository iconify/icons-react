import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7qx85bwi.css';
import '../../css/j/jcidjcczi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7qx85bwi"/><path class="jcidjcczi"/>`,
		"fallback": "energy-icons:calendar-20-bold",
	});
}

export default Component;
