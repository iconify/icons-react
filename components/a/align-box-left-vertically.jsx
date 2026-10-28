import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6b014y8o.css';
import '../../css/t/ttnzs9o-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d6b014y8o"/><path class="ttnzs9o-c"/></g>`,
		"fallback": "andrsrxn:align-box-left-vertically",
	});
}

export default Component;
