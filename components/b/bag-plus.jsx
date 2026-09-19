import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv_bs2tkr.css';
import '../../css/h/htf2t7b6l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iv_bs2tkr"/><path class="htf2t7b6l"/></g>`,
		"fallback": "bi:bag-plus",
	});
}

export default Component;
