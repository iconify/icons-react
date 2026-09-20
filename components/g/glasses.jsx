import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg60n9v0v.css';
import '../../css/x/xk17nnbgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dg60n9v0v"/><path class="xk17nnbgw"/></g>`,
		"fallback": "streamline-color:glasses",
	});
}

export default Component;
