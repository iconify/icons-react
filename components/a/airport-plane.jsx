import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2pkqbc_y.css';
import '../../css/h/hubumib4z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u2pkqbc_y"/><path class="hubumib4z"/></g>`,
		"fallback": "streamline-color:airport-plane",
	});
}

export default Component;
