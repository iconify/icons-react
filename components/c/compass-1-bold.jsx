import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwztj5b9y.css';
import '../../css/r/r0ghptbtp.css';
import '../../css/y/ynwa9-bwp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwztj5b9y"/><path clip-rule="evenodd" class="r0ghptbtp"/><path class="ynwa9-bwp"/></g>`,
		"fallback": "glyphs:compass-1-bold",
	});
}

export default Component;
