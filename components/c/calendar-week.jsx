import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsv83ibjj.css';
import '../../css/k/kmg4ecg1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lsv83ibjj"/><path class="kmg4ecg1g"/></g>`,
		"fallback": "andrsrxn:calendar-week",
	});
}

export default Component;
