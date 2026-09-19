import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rix6wwbtx.css';
import '../../css/l/lq4t4mljo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rix6wwbtx"/><path class="lq4t4mljo"/></g>`,
		"fallback": "gg:edit-flip-v",
	});
}

export default Component;
