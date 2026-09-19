import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mm5klkbms.css';
import '../../css/c/c-npqac-u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mm5klkbms"/><path class="c-npqac-u"/></g>`,
		"fallback": "bi:badge-vr-fill",
	});
}

export default Component;
