import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o118l3y5l.css';
import '../../css/c/cq6bigbol.css';
import '../../css/b/bo61s2bfq.css';
import '../../css/x/x19_j9haf.css';
import '../../css/v/vqottxxxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="o118l3y5l wm-shadow"/><path class="cq6bigbol wm-shadow"/><path class="bo61s2bfq"/><path class="x19_j9haf"/><path class="vqottxxxp"/></g>`,
		"fallback": "withicons-brutal:cash-register",
	});
}

export default Component;
