import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zm50bdcdw.css';
import '../../css/i/i0snmrx1y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zm50bdcdw"/><path clip-rule="evenodd" class="i0snmrx1y"/></g>`,
		"fallback": "streamline-color:archive-box-flat",
	});
}

export default Component;
