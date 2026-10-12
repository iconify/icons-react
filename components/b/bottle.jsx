import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c014yb_4w.css';
import '../../css/h/hvpcu3cyo.css';
import '../../css/v/vxonsib5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c014yb_4w"/><path class="hvpcu3cyo"/><path class="vxonsib5z"/></g>`,
		"fallback": "andrsrxn:bottle",
	});
}

export default Component;
