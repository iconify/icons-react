import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/afsig3bsy.css';
import '../../css/w/w6we5uqwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="afsig3bsy"/><path class="w6we5uqwh"/></g>`,
		"fallback": "reicon:desktop-download",
	});
}

export default Component;
