import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij-0d6uhs.css';
import '../../css/y/yth-0hbsd.css';
import '../../css/r/rpq84wb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ij-0d6uhs"/><path class="yth-0hbsd"/><path class="rpq84wb_x"/></g>`,
		"fallback": "andrsrxn:book-sparkle",
	});
}

export default Component;
