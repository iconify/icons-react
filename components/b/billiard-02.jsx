import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b1667kbkd.css';
import '../../css/w/websu8mzr.css';
import '../../css/x/x3xw6n-2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b1667kbkd"/><path class="websu8mzr"/><path class="x3xw6n-2f"/></g>`,
		"fallback": "hugeicons:billiard-02",
	});
}

export default Component;
