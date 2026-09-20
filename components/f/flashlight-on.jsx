import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wg9lcmw6v.css';
import '../../css/c/c7vu4eb-g.css';
import '../../css/k/kbndj12cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wg9lcmw6v"/><path clip-rule="evenodd" class="c7vu4eb-g"/><path class="kbndj12cr"/></g>`,
		"fallback": "reicon:flashlight-on",
	});
}

export default Component;
