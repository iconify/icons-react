import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-ph31wwp.css';
import '../../css/b/bvu3l2bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-ph31wwp"/><path class="bvu3l2bny"/></g>`,
		"fallback": "andrsrxn:briefcase",
	});
}

export default Component;
