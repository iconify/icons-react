import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4pmjbbvo.css';
import '../../css/z/zxn-nib0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e4pmjbbvo"/><path class="zxn-nib0i"/></g>`,
		"fallback": "iconaut:bread",
	});
}

export default Component;
