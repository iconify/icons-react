import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dw6l93l1b.css';
import '../../css/g/gict52e_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dw6l93l1b"/><path class="gict52e_n"/></g>`,
		"fallback": "bi:file-image",
	});
}

export default Component;
