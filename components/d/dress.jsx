import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvaohclyh.css';
import '../../css/f/f1wbq215n.css';
import '../../css/u/ut3v9tzgs.css';
import '../../css/o/o3ns5fy5r.css';
import '../../css/e/ea4fvur5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qvaohclyh"/><path class="f1wbq215n"/><path class="ut3v9tzgs"/><path class="o3ns5fy5r"/><path class="ea4fvur5z"/></g>`,
		"fallback": "andrsrxn:dress",
	});
}

export default Component;
