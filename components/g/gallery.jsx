import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/an7gnjevq.css';
import '../../css/x/x5y8bwbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="an7gnjevq"/><path class="x5y8bwbsk"/></g>`,
		"fallback": "andrsrxn:gallery",
	});
}

export default Component;
