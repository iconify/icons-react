import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_w9db6sl.css';
import '../../css/b/bfcts-byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v_w9db6sl"/><path class="bfcts-byx"/></g>`,
		"fallback": "gg:comedy-central",
	});
}

export default Component;
