import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mo3cu6bdb.css';
import '../../css/c/cfef3o_7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mo3cu6bdb"/><path clip-rule="evenodd" class="cfef3o_7t"/></g>`,
		"fallback": "andrsrxn:heart-scan",
	});
}

export default Component;
