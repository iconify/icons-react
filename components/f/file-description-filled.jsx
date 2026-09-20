import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ys-wwx_xt.css';
import '../../css/r/rjkl0yiqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ys-wwx_xt"/><path class="rjkl0yiqc"/></g>`,
		"fallback": "tabler:file-description-filled",
	});
}

export default Component;
