import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sn8fxdbrh.css';
import '../../css/u/uicuz6qoi.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sn8fxdbrh"/><path class="uicuz6qoi"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:hand-open-off",
	});
}

export default Component;
