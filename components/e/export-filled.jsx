import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hs5sg4xtk.css';
import '../../css/w/w24nj5bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hs5sg4xtk"/><path class="w24nj5bxi"/></g>`,
		"fallback": "reicon:export-filled",
	});
}

export default Component;
