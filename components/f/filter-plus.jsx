import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_4docbcs.css';
import '../../css/w/wi5vdnl4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_4docbcs"/><path class="wi5vdnl4w"/></g>`,
		"fallback": "andrsrxn:filter-plus",
	});
}

export default Component;
