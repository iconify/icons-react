import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fk592nv7k.css';
import '../../css/a/a1tx6bc4w.css';
import '../../css/r/rfdp__b7m.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fk592nv7k"/><path clip-rule="evenodd" class="a1tx6bc4w"/><path clip-rule="evenodd" class="rfdp__b7m"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:checkmark-outlined-off",
	});
}

export default Component;
