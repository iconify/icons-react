import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zj2s57brq.css';
import '../../css/u/ufh554b_u.css';
import '../../css/g/gs71bfbdk.css';
import '../../css/u/u41_hqpoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zj2s57brq"/><path class="ufh554b_u wm-shadow"/><path class="gs71bfbdk"/><path class="u41_hqpoj"/></g>`,
		"fallback": "withicons-brutal:hand",
	});
}

export default Component;
