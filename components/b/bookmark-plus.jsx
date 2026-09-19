import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3_c0ac3l.css';
import '../../css/b/bsuc_zb5a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l3_c0ac3l"/><path class="bsuc_zb5a"/></g>`,
		"fallback": "bi:bookmark-plus",
	});
}

export default Component;
