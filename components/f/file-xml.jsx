import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wo_sc9bzi.css';
import '../../css/l/l8e3ucb9j.css';
import '../../css/s/s581r1p6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wo_sc9bzi"/><path class="l8e3ucb9j"/><path class="s581r1p6m"/></g>`,
		"fallback": "andrsrxn:file-xml",
	});
}

export default Component;
