import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6b014y8o.css';
import '../../css/c/c8ev0ze6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d6b014y8o"/><path class="c8ev0ze6v"/></g>`,
		"fallback": "andrsrxn:align-box-center-horizontally",
	});
}

export default Component;
