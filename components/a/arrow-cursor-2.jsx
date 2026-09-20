import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxodgc8yb.css';
import '../../css/b/blvdedu5q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fxodgc8yb"/><path class="blvdedu5q"/></g>`,
		"fallback": "streamline-flex-color:arrow-cursor-2",
	});
}

export default Component;
