import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyanzub4e.css';
import '../../css/u/udx94hb3b.css';
import '../../css/o/oenk4v16u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="dyanzub4e"/><path class="udx94hb3b"/><path class="oenk4v16u"/></g>`,
		"fallback": "skill-icons:css",
	});
}

export default Component;
