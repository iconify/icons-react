import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9zr0c8bv.css';
import '../../css/k/kuwfzlbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9zr0c8bv"/><path clip-rule="evenodd" class="kuwfzlbas"/></g>`,
		"fallback": "reicon:docs-filled",
	});
}

export default Component;
