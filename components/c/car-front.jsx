import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ow6rsf1wk.css';
import '../../css/x/xrekrwbxx.css';
import '../../css/f/fa1b6ybdf.css';
import '../../css/t/t23vlcl0v.css';
import '../../css/o/opjlracts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ow6rsf1wk wm-shadow"/><path class="wm-shadow xrekrwbxx"/><path class="fa1b6ybdf"/><path class="t23vlcl0v"/><path class="opjlracts"/></g>`,
		"fallback": "withicons-brutal:car-front",
	});
}

export default Component;
