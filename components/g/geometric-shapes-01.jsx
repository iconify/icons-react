import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rv4ydkbqf.css';
import '../../css/q/qqhx8ebex.css';
import '../../css/h/hqnl-9uga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rv4ydkbqf"/><circle class="qqhx8ebex"/><path class="hqnl-9uga"/></g>`,
		"fallback": "hugeicons:geometric-shapes-01",
	});
}

export default Component;
