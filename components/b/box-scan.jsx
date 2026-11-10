import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6xqlkb3d.css';
import '../../css/k/k5ekj4bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g6xqlkb3d"/><path clip-rule="evenodd" class="k5ekj4bzo"/></g>`,
		"fallback": "andrsrxn:box-scan",
	});
}

export default Component;
