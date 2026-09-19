import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y0hsxer2p.css';
import '../../css/e/edlj5_blx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y0hsxer2p"/><path class="edlj5_blx"/></g>`,
		"fallback": "bi:arrow-counterclockwise",
	});
}

export default Component;
