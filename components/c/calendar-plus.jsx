import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd8811bxn.css';
import '../../css/e/epypr2biz.css';
import '../../css/q/qn5ir7v6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rd8811bxn"/><rect class="epypr2biz"/><path class="qn5ir7v6d"/></g>`,
		"fallback": "andrsrxn:calendar-plus",
	});
}

export default Component;
