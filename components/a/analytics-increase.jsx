import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/x/x7gky6bto.css';
import '../../css/q/q4ow7x1ja.css';
import '../../css/a/ak5a0ziex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="x7gky6bto"/><path class="q4ow7x1ja"/><path class="ak5a0ziex"/></g>`,
		"fallback": "andrsrxn:analytics-increase",
	});
}

export default Component;
