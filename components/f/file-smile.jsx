import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bk_r3rbbz.css';
import '../../css/d/dyevr4boi.css';
import '../../css/q/qfwattbuf.css';
import '../../css/i/ikzht7pab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bk_r3rbbz"/><path class="dyevr4boi"/><path clip-rule="evenodd" class="qfwattbuf"/><path class="ikzht7pab"/></g>`,
		"fallback": "reicon:file-smile",
	});
}

export default Component;
