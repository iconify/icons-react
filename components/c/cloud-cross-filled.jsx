import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eunagkbmk.css';
import '../../css/v/v6zpz0omn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eunagkbmk"/><path class="v6zpz0omn"/></g>`,
		"fallback": "reicon:cloud-cross-filled",
	});
}

export default Component;
