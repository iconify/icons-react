import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3bmccb6f.css';
import '../../css/b/bebblccgl.css';
import '../../css/q/q7xg2kb3o.css';
import '../../css/j/j83pxeb9x.css';
import '../../css/t/tfu43gbdw.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t3bmccb6f"/><path clip-rule="evenodd" class="bebblccgl"/><path class="q7xg2kb3o"/><path class="j83pxeb9x"/><path class="tfu43gbdw"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:coctail-off",
	});
}

export default Component;
