import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tixhj4bfq.css';
import '../../css/w/w80ndbjsj.css';
import '../../css/v/v03fodrvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tixhj4bfq"/><path class="w80ndbjsj"/><path class="v03fodrvn"/></g>`,
		"fallback": "andrsrxn:bricks-flame",
	});
}

export default Component;
