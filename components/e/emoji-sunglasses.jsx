import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzt-j_b7n.css';
import '../../css/m/m5bwf3b6c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzt-j_b7n"/><path class="m5bwf3b6c"/></g>`,
		"fallback": "bi:emoji-sunglasses",
	});
}

export default Component;
