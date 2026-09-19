import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/c/c0-qpri0o.css';
import '../../css/q/qmtjgim9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="h_l78yaxm"/><path class="c0-qpri0o"/><path class="qmtjgim9j"/></g>`,
		"fallback": "hugeicons:bitcoin-database",
	});
}

export default Component;
