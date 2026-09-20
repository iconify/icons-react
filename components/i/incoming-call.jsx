import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5qkxdb4o.css';
import '../../css/x/xrrkdy0hv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5qkxdb4o"/><path class="xrrkdy0hv"/></g>`,
		"fallback": "streamline-flex-color:incoming-call",
	});
}

export default Component;
