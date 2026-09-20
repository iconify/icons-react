import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1wyxpsbk.css';
import '../../css/r/rhbtr-42b.css';
import '../../css/e/em-qxpb0r.css';
import '../../css/v/v5rkscndi.css';
import '../../css/z/z_k5fwbwj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1wyxpsbk"/><path clip-rule="evenodd" class="rhbtr-42b"/><path clip-rule="evenodd" class="em-qxpb0r"/><path clip-rule="evenodd" class="v5rkscndi"/><path clip-rule="evenodd" class="z_k5fwbwj"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:coins-off",
	});
}

export default Component;
