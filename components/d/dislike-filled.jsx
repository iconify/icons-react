import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y6z32qb9n.css';
import '../../css/t/tpcwbcbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y6z32qb9n"/><path class="tpcwbcbvn"/></g>`,
		"fallback": "andrsrxn:dislike-filled",
	});
}

export default Component;
