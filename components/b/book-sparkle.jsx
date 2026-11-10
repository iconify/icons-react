import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij-0d6uhs.css';
import '../../css/j/j_6_mecrt.css';
import '../../css/z/zb5swmrwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ij-0d6uhs"/><path class="j_6_mecrt"/><path class="zb5swmrwh"/></g>`,
		"fallback": "andrsrxn:book-sparkle",
	});
}

export default Component;
