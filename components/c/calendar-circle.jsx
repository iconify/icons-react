import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/r4jkcab4b.css';
import '../../css/d/du5byunta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="r4jkcab4b"/><path class="du5byunta"/></g>`,
		"fallback": "reicon:calendar-circle",
	});
}

export default Component;
