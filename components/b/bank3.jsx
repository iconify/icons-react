import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/r3rl1bb8g.css';
import '../../css/j/ji7ajmw_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="r3rl1bb8g"/><path class="ji7ajmw_x"/></g>`,
		"fallback": "reicon:bank3",
	});
}

export default Component;
