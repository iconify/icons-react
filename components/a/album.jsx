import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ashhz-byl.css';
import '../../css/j/jkjg3vvtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ashhz-byl"/><path class="jkjg3vvtx"/></g>`,
		"fallback": "pixelarticons:album",
	});
}

export default Component;
