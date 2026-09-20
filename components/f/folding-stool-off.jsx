import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dw47yel7y.css';
import '../../css/g/g6an5ei9s.css';
import '../../css/u/u_8_gxjut.css';
import '../../css/l/lva1h7g9t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="dw47yel7y"/><path class="g6an5ei9s"/><path class="u_8_gxjut"/><path class="lva1h7g9t"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:folding-stool-off",
	});
}

export default Component;
