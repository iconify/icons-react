import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7cew6b7g.css';
import '../../css/u/upr7vbb_w.css';
import '../../css/n/n9wjrab6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="h7cew6b7g"/><path class="upr7vbb_w"/><path class="n9wjrab6j"/></g>`,
		"fallback": "andrsrxn:degree-45",
	});
}

export default Component;
