import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qn_8dxb9v.css';
import '../../css/q/qjx4q3b5l.css';
import '../../css/b/bv_q14-ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qn_8dxb9v wm-shadow"/><path class="qjx4q3b5l wm-shadow"/><path class="bv_q14-ra"/></g>`,
		"fallback": "withicons-brutal:git-graph",
	});
}

export default Component;
