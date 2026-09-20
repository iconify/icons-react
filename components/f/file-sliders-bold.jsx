import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wiyer81jr.css';
import '../../css/d/d9e_nacvx.css';
import '../../css/s/scux88gbr.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wiyer81jr"/><path class="d9e_nacvx"/><path clip-rule="evenodd" class="scux88gbr"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-sliders-bold",
	});
}

export default Component;
