import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvo-2sk3k.css';
import '../../css/j/jedvirhqf.css';
import '../../css/j/jz85uq4iy.css';
import '../../css/i/ihi0izblu.css';
import '../../css/f/f2r5c9rrx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvo-2sk3k"/><path clip-rule="evenodd" class="jedvirhqf"/><path class="jz85uq4iy"/><path class="ihi0izblu"/><path class="f2r5c9rrx"/></g>`,
		"fallback": "streamline-color:cheese",
	});
}

export default Component;
