import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aogt7nbob.css';
import '../../css/k/kuk9u9zug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aogt7nbob"/><path class="kuk9u9zug"/></g>`,
		"fallback": "andrsrxn:annotations",
	});
}

export default Component;
