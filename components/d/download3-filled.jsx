import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dloc3cbwu.css';
import '../../css/e/emoc33ghw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dloc3cbwu"/><path class="emoc33ghw"/></g>`,
		"fallback": "reicon:download3-filled",
	});
}

export default Component;
