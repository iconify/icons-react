import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbfxzgoza.css';
import '../../css/x/xhvmvotcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gbfxzgoza"/><path class="xhvmvotcj"/></g>`,
		"fallback": "andrsrxn:calendar",
	});
}

export default Component;
