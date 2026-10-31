import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y01ft5bnz.css';
import '../../css/l/l3cij_a6s.css';
import '../../css/e/e-rrf7u5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y01ft5bnz"/><path class="l3cij_a6s wm-shadow"/><path class="e-rrf7u5o"/></g>`,
		"fallback": "withicons-brutal:chinese-knot",
	});
}

export default Component;
