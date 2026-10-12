import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whda0bbhs.css';
import '../../css/z/zw6kmbcxg.css';
import '../../css/r/r6me4vy1s.css';
import '../../css/c/c5p18jbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whda0bbhs"/><path class="zw6kmbcxg"/><path class="r6me4vy1s"/><path class="c5p18jbhz"/></g>`,
		"fallback": "andrsrxn:hand-grabbing",
	});
}

export default Component;
