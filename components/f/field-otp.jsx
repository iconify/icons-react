import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zt8dh8bgu.css';
import '../../css/k/kvp8hmb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zt8dh8bgu"/><path class="kvp8hmb2t"/></g>`,
		"fallback": "andrsrxn:field-otp",
	});
}

export default Component;
