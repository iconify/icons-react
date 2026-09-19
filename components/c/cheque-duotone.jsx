import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojkdnabtr.css';
import '../../css/h/hj4s0de-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ojkdnabtr"/><path class="hj4s0de-y"/></g>`,
		"fallback": "iconamoon:cheque-duotone",
	});
}

export default Component;
