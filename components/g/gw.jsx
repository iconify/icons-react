import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g75prrb1j.css';
import '../../css/a/a08onbc2i.css';
import '../../css/g/goe5_v87p.css';
import '../../css/g/g_jiwbcgj.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g75prrb1j"/><path class="a08onbc2i"/><path class="goe5_v87p"/><path class="g_jiwbcgj"/></g>`,
		"fallback": "cif:gw",
	});
}

export default Component;
