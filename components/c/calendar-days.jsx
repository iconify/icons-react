import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_c3gfbrx.css';
import '../../css/o/ok8e9k-vg.css';
import '../../css/w/w7r1_zifi.css';
import '../../css/r/rqb69engq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w_c3gfbrx"/><rect class="ok8e9k-vg"/><path class="w7r1_zifi"/><path class="rqb69engq"/></g>`,
		"fallback": "reicon:calendar-days",
	});
}

export default Component;
