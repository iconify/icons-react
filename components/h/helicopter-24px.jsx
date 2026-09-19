import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfjeuxbkb.css';
import '../../css/t/t2577rb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bfjeuxbkb"/><path clip-rule="evenodd" class="t2577rb0l"/></g>`,
		"fallback": "healthicons:helicopter-24px",
	});
}

export default Component;
