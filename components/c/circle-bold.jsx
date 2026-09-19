import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_gs00bhm.css';
import '../../css/p/psi-g6z7q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_gs00bhm"/><path class="psi-g6z7q"/></g>`,
		"fallback": "glyphs:circle-bold",
	});
}

export default Component;
