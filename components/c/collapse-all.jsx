import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q01_ccclh.css';
import '../../css/n/n3ox-1jay.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q01_ccclh"/><path clip-rule="evenodd" class="n3ox-1jay"/></g>`,
		"fallback": "codicon:collapse-all",
	});
}

export default Component;
