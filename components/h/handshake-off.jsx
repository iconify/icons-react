import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9kcs9b7r.css';
import '../../css/s/sjl_y87kp.css';
import '../../css/n/nv2x_e_ti.css';
import '../../css/y/yi7hai1dr.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h9kcs9b7r"/><path clip-rule="evenodd" class="sjl_y87kp"/><path class="nv2x_e_ti"/><path clip-rule="evenodd" class="yi7hai1dr"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:handshake-off",
	});
}

export default Component;
