import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/win8kqhfk.css';
import '../../css/a/armdn_btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="win8kqhfk"/><path clip-rule="evenodd" class="armdn_btz"/></g>`,
		"fallback": "reicon:bandage",
	});
}

export default Component;
