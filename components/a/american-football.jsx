import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n93lndbqr.css';
import '../../css/u/u6gd8cg2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n93lndbqr"/><path class="u6gd8cg2q"/></g>`,
		"fallback": "hugeicons:american-football",
	});
}

export default Component;
