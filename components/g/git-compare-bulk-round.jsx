import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wd4ygnuuu.css';
import '../../css/h/hmh31-gos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wd4ygnuuu"/><path class="hmh31-gos"/></g>`,
		"fallback": "coolicons:git-compare-bulk-round",
	});
}

export default Component;
