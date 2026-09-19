import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbjzcyb7b.css';
import '../../css/w/wuztmgkkn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rbjzcyb7b"/><path class="wuztmgkkn"/></g>`,
		"fallback": "bi:database-fill-slash",
	});
}

export default Component;
