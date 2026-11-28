import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pici8r_nw.css';
import '../../css/e/ergdchbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pici8r_nw secondary"/><path class="ergdchbna primary"/></g>`,
		"fallback": "iconaut:bed-duotone",
	});
}

export default Component;
