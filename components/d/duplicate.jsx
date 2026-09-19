import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r7xtx68rm.css';
import '../../css/k/kb-h47bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r7xtx68rm"/><path clip-rule="evenodd" class="kb-h47bad"/></g>`,
		"fallback": "gg:duplicate",
	});
}

export default Component;
