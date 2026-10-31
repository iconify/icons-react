import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j1u22lbcq.css';
import '../../css/h/h94g55hic.css';
import '../../css/f/fxljtu09q.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j1u22lbcq wm-shadow"/><path class="h94g55hic wm-shadow"/><path class="fxljtu09q"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:bluetooth-off",
	});
}

export default Component;
