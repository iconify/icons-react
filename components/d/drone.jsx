import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bhdpo-bir.css';
import '../../css/t/tbg9rr_ic.css';
import '../../css/w/w-y10bb_r.css';
import '../../css/d/d9a7l4ftc.css';
import '../../css/j/j7yv1i66t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bhdpo-bir wm-shadow"/><path class="tbg9rr_ic wm-shadow"/><path class="w-y10bb_r"/><path class="d9a7l4ftc"/><path class="j7yv1i66t"/></g>`,
		"fallback": "withicons-brutal:drone",
	});
}

export default Component;
