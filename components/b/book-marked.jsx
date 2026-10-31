import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_gvckftk.css';
import '../../css/u/uhqi6hhrp.css';
import '../../css/x/x8mrpdb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_gvckftk wm-k"/><path class="uhqi6hhrp wm-shine"/><path class="wm-shine x8mrpdb3x"/></g>`,
		"fallback": "withicons-lunar:book-marked",
	});
}

export default Component;
