import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io08ocb_q.css';
import '../../css/m/m4h938btx.css';
import '../../css/w/wvsudvexh.css';
import '../../css/r/ruvg_u9dg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="io08ocb_q"/><path class="m4h938btx"/><path class="wvsudvexh"/><path class="ruvg_u9dg"/></g>`,
		"fallback": "streamline-color:car-battery-charging",
	});
}

export default Component;
