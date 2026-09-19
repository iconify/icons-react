import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frntl2e_k.css';
import '../../css/m/m-2b3wbev.css';
import '../../css/m/m9jf4gbsc.css';
import '../../css/l/lr0viibxu.css';
import '../../css/y/yhha-b0xw.css';
import '../../css/z/z072_qjas.css';
import '../../css/f/f11ql4d4t.css';
import '../../css/h/h6ry7b2mb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="frntl2e_k"/><path class="m-2b3wbev"/><path class="m9jf4gbsc"/><path class="lr0viibxu"/><path class="yhha-b0xw"/><path class="z072_qjas"/><path class="f11ql4d4t"/><path class="h6ry7b2mb"/></g>`,
		"fallback": "fluent-emoji-flat:green-salad",
	});
}

export default Component;
