import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/z/z76lcrwjs.css';
import '../../css/w/wm61z6b7a.css';
import '../../css/m/mqj9qfm4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1iho-bvd"/><path class="z76lcrwjs"/><path class="wm61z6b7a"/><path class="mqj9qfm4r"/></g>`,
		"fallback": "andrsrxn:calendar-range",
	});
}

export default Component;
