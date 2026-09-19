import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ji_55yb_p.css';
import '../../css/a/a9mdjmhmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ji_55yb_p"/><path class="a9mdjmhmy"/></g>`,
		"fallback": "at-icons:doorway-exit",
	});
}

export default Component;
