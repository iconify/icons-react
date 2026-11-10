import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwiit7b3q.css';
import '../../css/a/axl2q9bvf.css';
import '../../css/a/a4dyx2bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wwiit7b3q"/><path class="axl2q9bvf"/><path class="a4dyx2bci"/></g>`,
		"fallback": "andrsrxn:helmet-off",
	});
}

export default Component;
