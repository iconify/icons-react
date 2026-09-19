import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/phg_u2j0a.css';
import '../../css/g/gchgqccgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="phg_u2j0a"/><path class="gchgqccgt"/></g>`,
		"fallback": "bi:houses-fill",
	});
}

export default Component;
