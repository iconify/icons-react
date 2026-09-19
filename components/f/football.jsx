import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/websu8mzr.css';
import '../../css/j/jdo911b9f.css';
import '../../css/a/a0wcmjm3e.css';
import '../../css/o/oxqq_4bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="websu8mzr"/><path class="jdo911b9f"/><path class="a0wcmjm3e"/><path class="oxqq_4bxq"/></g>`,
		"fallback": "hugeicons:football",
	});
}

export default Component;
