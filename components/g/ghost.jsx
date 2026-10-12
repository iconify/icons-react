import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djgu3wb1d.css';
import '../../css/z/zahr89b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djgu3wb1d"/><path class="zahr89b5e"/></g>`,
		"fallback": "andrsrxn:ghost",
	});
}

export default Component;
