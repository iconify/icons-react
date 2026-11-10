import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptysqk-yf.css';
import '../../css/l/l9wzvib_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptysqk-yf"/><path class="l9wzvib_i"/></g>`,
		"fallback": "andrsrxn:drop-shadow",
	});
}

export default Component;
