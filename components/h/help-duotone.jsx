import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8i1l8bif.css';
import '../../css/q/qyplx21sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j8i1l8bif"/><path class="qyplx21sd"/></g>`,
		"fallback": "reicon:help-duotone",
	});
}

export default Component;
