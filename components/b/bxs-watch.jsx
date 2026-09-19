import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-5v66b_l.css';
import '../../css/u/u1kdlxb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-5v66b_l"/><path class="u1kdlxb_t"/>`,
		"fallback": "bx:bxs-watch",
	});
}

export default Component;
