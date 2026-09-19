import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nyl59rfbs.css';
import '../../css/p/pp-hmcb4o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="nyl59rfbs"/><path class="pp-hmcb4o"/></g>`,
		"fallback": "bi:dice-1",
	});
}

export default Component;
