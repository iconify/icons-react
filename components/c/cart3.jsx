import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cl2uelpmm.css';
import '../../css/r/rlwzzxuyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cl2uelpmm"/><path clip-rule="evenodd" class="rlwzzxuyr"/></g>`,
		"fallback": "reicon:cart3",
	});
}

export default Component;
