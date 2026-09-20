import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro7cylxxx.css';
import '../../css/p/pb5ln7bbv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ro7cylxxx"/><path class="pb5ln7bbv"/></g>`,
		"fallback": "streamline-color:flip-vertical-arrow-2",
	});
}

export default Component;
