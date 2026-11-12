import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlsrcd06b.css';
import '../../css/d/didnbvtvq.css';

const viewBox = {"width":75,"height":75};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlsrcd06b"/><path class="didnbvtvq"/></g>`,
		"fallback": "thesvg-color:confluence",
	});
}

export default Component;
