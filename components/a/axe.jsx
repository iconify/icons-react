import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljj3h7bwu.css';
import '../../css/h/h4jykf29b.css';
import '../../css/q/qregx9bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ljj3h7bwu"/><path class="h4jykf29b"/><path class="qregx9bkc"/></g>`,
		"fallback": "andrsrxn:axe",
	});
}

export default Component;
