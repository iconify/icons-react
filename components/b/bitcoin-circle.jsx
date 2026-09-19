import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np7z08buk.css';
import '../../css/f/f1ca565tw.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="np7z08buk"/><path class="f1ca565tw"/></g>`,
		"fallback": "foundation:bitcoin-circle",
	});
}

export default Component;
