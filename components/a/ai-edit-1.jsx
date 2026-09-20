import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3cx_uorh.css';
import '../../css/c/c2cwoibya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p3cx_uorh"/><path class="c2cwoibya"/></g>`,
		"fallback": "tdesign:ai-edit-1",
	});
}

export default Component;
