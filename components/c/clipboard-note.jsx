import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5oqxccsk.css';
import '../../css/n/n_g0fjydz.css';
import '../../css/f/f9d6qcb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5oqxccsk"/><path class="n_g0fjydz"/><path class="f9d6qcb-d"/></g>`,
		"fallback": "pixelarticons:clipboard-note",
	});
}

export default Component;
