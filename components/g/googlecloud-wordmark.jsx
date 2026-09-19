import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epx2zjbrs.css';
import '../../css/t/t2xnnpb2g.css';
import '../../css/q/qifgr8pul.css';
import '../../css/z/zmo714tko.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epx2zjbrs"/><path class="t2xnnpb2g"/><path class="qifgr8pul"/><path class="zmo714tko"/></g>`,
		"fallback": "devicon-plain:googlecloud-wordmark",
	});
}

export default Component;
