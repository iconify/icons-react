import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqc_k2hdy.css';
import '../../css/c/ckktipbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lqc_k2hdy"/><path class="ckktipbea"/></g>`,
		"fallback": "reicon:heart-hand-filled",
	});
}

export default Component;
