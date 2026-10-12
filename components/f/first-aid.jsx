import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd8aakbys.css';
import '../../css/k/kb3fks7pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rd8aakbys"/><path class="kb3fks7pf"/></g>`,
		"fallback": "andrsrxn:first-aid",
	});
}

export default Component;
