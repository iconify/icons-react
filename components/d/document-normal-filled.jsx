import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wv4yazokk.css';
import '../../css/x/xkcbf1byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wv4yazokk"/><path class="xkcbf1byo"/></g>`,
		"fallback": "reicon:document-normal-filled",
	});
}

export default Component;
