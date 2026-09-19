import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bh5krdj_w.css';
import '../../css/o/omwz9_bxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bh5krdj_w"/><path class="omwz9_bxv"/></g>`,
		"fallback": "bi:border-outer",
	});
}

export default Component;
