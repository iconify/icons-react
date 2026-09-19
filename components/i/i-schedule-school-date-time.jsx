import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg_r1w5zy.css';
import '../../css/h/hl1483cic.css';
import '../../css/e/ejyojtvpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sg_r1w5zy"/><path class="hl1483cic"/><path clip-rule="evenodd" class="ejyojtvpq"/></g>`,
		"fallback": "healthicons:i-schedule-school-date-time",
	});
}

export default Component;
