import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inx-9dmcc.css';
import '../../css/m/m65hm3jnm.css';
import '../../css/e/e-92qdb-a.css';
import '../../css/g/g_jiwbcgj.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="inx-9dmcc"/><path class="m65hm3jnm"/><path class="e-92qdb-a"/><path class="g_jiwbcgj"/></g>`,
		"fallback": "cif:gw",
	});
}

export default Component;
