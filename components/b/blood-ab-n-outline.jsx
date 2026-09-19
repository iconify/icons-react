import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j852ylbcm.css';
import '../../css/n/n1004lbky.css';
import '../../css/y/ys3b370un.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j852ylbcm"/><path clip-rule="evenodd" class="n1004lbky"/><path class="ys3b370un"/></g>`,
		"fallback": "healthicons:blood-ab-n-outline",
	});
}

export default Component;
