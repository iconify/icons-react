import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i5stmw_9d.css';
import '../../css/r/rfrelpt5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="i5stmw_9d"/><path class="rfrelpt5b"/></g>`,
		"fallback": "hugeicons:gears",
	});
}

export default Component;
