import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pp-hmcb4o.css';
import '../../css/o/okz0usqpa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pp-hmcb4o"/><path class="okz0usqpa"/></g>`,
		"fallback": "bi:dice-2",
	});
}

export default Component;
