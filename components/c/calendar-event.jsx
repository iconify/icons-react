import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/z/z76lcrwjs.css';
import '../../css/m/myh5mh2td.css';
import '../../css/y/yip7db3hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1iho-bvd"/><path class="z76lcrwjs"/><path class="myh5mh2td"/><path class="yip7db3hn"/></g>`,
		"fallback": "andrsrxn:calendar-event",
	});
}

export default Component;
