import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jldpwfb-s.css';
import '../../css/l/l30-5vb5s.css';
import '../../css/x/x3pawtpgt.css';
import '../../css/q/qb-6xq-px.css';
import '../../css/y/y6q5ercew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jldpwfb-s"/><path class="l30-5vb5s"/><path class="x3pawtpgt"/><path class="qb-6xq-px"/><path class="y6q5ercew"/></g>`,
		"fallback": "andrsrxn:app-window-bug",
	});
}

export default Component;
