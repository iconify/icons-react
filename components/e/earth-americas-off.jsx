import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uye97lbbq.css';
import '../../css/g/gvhpknb0i.css';
import '../../css/g/gpo0x5mpy.css';
import '../../css/r/r0ei81btz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uye97lbbq"/><path clip-rule="evenodd" class="gvhpknb0i"/><path clip-rule="evenodd" class="gpo0x5mpy"/><path clip-rule="evenodd" class="r0ei81btz"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:earth-americas-off",
	});
}

export default Component;
