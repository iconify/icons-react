import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/x/x_j4-9b8l.css';
import '../../css/t/t5nqs-b0h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="x_j4-9b8l"/><path class="t5nqs-b0h"/></g>`,
		"fallback": "skill-icons:crystal-dark",
	});
}

export default Component;
