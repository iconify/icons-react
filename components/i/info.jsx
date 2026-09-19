import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xvoav_02w.css';
import '../../css/t/thebh4qsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xvoav_02w"/><path clip-rule="evenodd" class="thebh4qsa"/></g>`,
		"fallback": "gg:info",
	});
}

export default Component;
