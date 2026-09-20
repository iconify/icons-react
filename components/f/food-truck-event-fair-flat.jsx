import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys_6m2bkp.css';
import '../../css/o/o_scyxbhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ys_6m2bkp"/><path class="o_scyxbhf"/></g>`,
		"fallback": "streamline-plump-color:food-truck-event-fair-flat",
	});
}

export default Component;
