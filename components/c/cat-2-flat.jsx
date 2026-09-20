import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhw_ifbtw.css';
import '../../css/y/ye2d8yb3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jhw_ifbtw"/><path clip-rule="evenodd" class="ye2d8yb3y"/></g>`,
		"fallback": "streamline-flex-color:cat-2-flat",
	});
}

export default Component;
