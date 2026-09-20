import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nz26n1b5p.css';
import '../../css/g/g1z6mk3_x.css';
import '../../css/c/cw3fst3sg.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="nz26n1b5p"/><path class="g1z6mk3_x"/><path class="cw3fst3sg"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:eye-frame-off",
	});
}

export default Component;
