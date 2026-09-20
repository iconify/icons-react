import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow6dvz9el.css';
import '../../css/f/f5-z0rdql.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ow6dvz9el"/><path class="f5-z0rdql"/></g>`,
		"fallback": "streamline-color:circle-flask",
	});
}

export default Component;
