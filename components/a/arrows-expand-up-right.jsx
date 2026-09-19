import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vw9kg9x8b.css';
import '../../css/q/qgs041big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vw9kg9x8b"/><path clip-rule="evenodd" class="qgs041big"/></g>`,
		"fallback": "gg:arrows-expand-up-right",
	});
}

export default Component;
