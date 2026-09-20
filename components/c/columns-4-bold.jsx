import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4c_pmb7m.css';
import '../../css/y/y9rzt59_w.css';
import '../../css/u/uf_5n0bwx.css';
import '../../css/k/klv35m69y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i4c_pmb7m"/><path class="y9rzt59_w"/><path class="uf_5n0bwx"/><path class="klv35m69y"/></g>`,
		"fallback": "solar:columns-4-bold",
	});
}

export default Component;
