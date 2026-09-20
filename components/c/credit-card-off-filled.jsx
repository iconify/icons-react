import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whuhe-bcp.css';
import '../../css/m/m5y9rlbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="whuhe-bcp"/><path class="m5y9rlbvf"/></g>`,
		"fallback": "reicon:credit-card-off-filled",
	});
}

export default Component;
