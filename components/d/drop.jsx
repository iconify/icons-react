import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsvo2obty.css';
import '../../css/r/rqcn1k66j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qsvo2obty"/><path clip-rule="evenodd" class="rqcn1k66j"/></g>`,
		"fallback": "reicon:drop",
	});
}

export default Component;
