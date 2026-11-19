import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_l0aknxj.css';
import '../../css/s/sf6wmqb0s.css';
import '../../css/f/fpkymacnh.css';
import '../../css/c/care3fgav.css';
import '../../css/u/u1_5eacmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_l0aknxj"/><path class="sf6wmqb0s"/><path class="fpkymacnh"/><path class="care3fgav"/><path class="u1_5eacmd"/></g>`,
		"fallback": "andrsrxn:hamburger",
	});
}

export default Component;
