import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfhwvwbub.css';
import '../../css/a/azr49eb6a.css';
import '../../css/z/zlknsbcnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfhwvwbub"/><path class="azr49eb6a"/><path class="zlknsbcnx"/></g>`,
		"fallback": "andrsrxn:calendar-search",
	});
}

export default Component;
