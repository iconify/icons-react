import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9bxye0qr.css';
import '../../css/l/lc7utvdbm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9bxye0qr"/><path class="lc7utvdbm"/></g>`,
		"fallback": "streamline-color:cloud",
	});
}

export default Component;
