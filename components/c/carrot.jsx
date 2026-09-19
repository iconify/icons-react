import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vu3anyb_w.css';
import '../../css/o/o_0wjsbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vu3anyb_w"/><path class="o_0wjsbub"/></g>`,
		"fallback": "hugeicons:carrot",
	});
}

export default Component;
