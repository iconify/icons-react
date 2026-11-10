import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsv83ibjj.css';
import '../../css/r/r1pkp0bch.css';
import '../../css/x/xowv5xdgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lsv83ibjj"/><path class="r1pkp0bch"/><path class="xowv5xdgy"/></g>`,
		"fallback": "andrsrxn:calendar-dot",
	});
}

export default Component;
