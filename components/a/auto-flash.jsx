import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otwm6sb-x.css';
import '../../css/h/h9_a3ub-o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otwm6sb-x"/><path class="h9_a3ub-o"/></g>`,
		"fallback": "streamline-color:auto-flash",
	});
}

export default Component;
