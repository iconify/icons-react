import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwx2xccqo.css';
import '../../css/h/h6ho0hbkb.css';
import '../../css/z/zj-1c3byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dwx2xccqo"/><path class="h6ho0hbkb"/><path class="zj-1c3byi"/></g>`,
		"fallback": "andrsrxn:devices",
	});
}

export default Component;
