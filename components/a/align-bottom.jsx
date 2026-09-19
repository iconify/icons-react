import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwgm2bcou.css';
import '../../css/o/opdiumb1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="bwgm2bcou"/><path class="opdiumb1u"/></g>`,
		"fallback": "bi:align-bottom",
	});
}

export default Component;
