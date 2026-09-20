import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-_t91b_v.css';
import '../../css/b/bhuivwsqr.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d-_t91b_v"/><path class="bhuivwsqr"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:clipboard-off",
	});
}

export default Component;
