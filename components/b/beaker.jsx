import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmgjz22ym.css';
import '../../css/c/c72k1cchk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qmgjz22ym"/><path class="c72k1cchk"/></g>`,
		"fallback": "bi:beaker",
	});
}

export default Component;
