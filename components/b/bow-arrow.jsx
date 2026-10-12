import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wy8i4obun.css';
import '../../css/c/cyyfp9btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wy8i4obun"/><path class="cyyfp9btr"/></g>`,
		"fallback": "andrsrxn:bow-arrow",
	});
}

export default Component;
