import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yp6m1kboz.css';
import '../../css/e/eqa8x223t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yp6m1kboz"/><path clip-rule="evenodd" class="eqa8x223t"/></g>`,
		"fallback": "streamline-plump-color:horizonal-scroll-flat",
	});
}

export default Component;
