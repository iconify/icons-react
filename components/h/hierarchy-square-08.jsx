import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c94s1ub5j.css';
import '../../css/n/n3t_kxb6u.css';
import '../../css/n/nw477oplc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c94s1ub5j"/><path class="n3t_kxb6u"/><path class="nw477oplc"/></g>`,
		"fallback": "hugeicons:hierarchy-square-08",
	});
}

export default Component;
