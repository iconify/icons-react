import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yyqopsbeq.css';
import '../../css/r/reae5jb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yyqopsbeq"/><path class="reae5jb_t"/></g>`,
		"fallback": "andrsrxn:flag-triangle-right",
	});
}

export default Component;
