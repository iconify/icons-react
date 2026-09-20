import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6mkd3buu.css';
import '../../css/i/ir-oi_b7m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z6mkd3buu"/><path clip-rule="evenodd" class="ir-oi_b7m"/></g>`,
		"fallback": "streamline-flex-color:diamond-1-flat",
	});
}

export default Component;
