import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tukkgybxu.css';
import '../../css/q/qkb0x4byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tukkgybxu"/><path class="qkb0x4byb"/></g>`,
		"fallback": "andrsrxn:crayon",
	});
}

export default Component;
