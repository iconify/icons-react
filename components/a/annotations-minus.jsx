import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mehailbua.css';
import '../../css/y/yulu_b0vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mehailbua"/><path class="yulu_b0vr"/></g>`,
		"fallback": "andrsrxn:annotations-minus",
	});
}

export default Component;
