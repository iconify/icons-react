import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_s0r2bch.css';
import '../../css/y/yuarghy0d.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d_s0r2bch"/><path clip-rule="evenodd" class="yuarghy0d"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:circle-off",
	});
}

export default Component;
