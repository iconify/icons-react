import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owgl7ub8k.css';
import '../../css/i/ifyq64ofy.css';
import '../../css/x/x4ihxui-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="owgl7ub8k"/><path class="ifyq64ofy"/><path class="x4ihxui-o"/></g>`,
		"fallback": "andrsrxn:calendar-days",
	});
}

export default Component;
