import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/db9oi35bt.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/b/bk5sigzvt.css';
import '../../css/e/exdxo5cyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="db9oi35bt wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="bk5sigzvt wm-k"/><path class="exdxo5cyc wm-a"/></g>`,
		"fallback": "withicons:donut-blueprint",
	});
}

export default Component;
