import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-_t91b_v.css';
import '../../css/w/whr7_acot.css';
import '../../css/h/hh44s0b7u.css';
import '../../css/a/aoj0v-r_d.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d-_t91b_v"/><path clip-rule="evenodd" class="whr7_acot"/><path clip-rule="evenodd" class="hh44s0b7u"/><path clip-rule="evenodd" class="aoj0v-r_d"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:clipboard-check-circled-off",
	});
}

export default Component;
