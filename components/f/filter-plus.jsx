import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_4docbcs.css';
import '../../css/o/o9i99uzxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_4docbcs"/><path class="o9i99uzxu"/></g>`,
		"fallback": "andrsrxn:filter-plus",
	});
}

export default Component;
