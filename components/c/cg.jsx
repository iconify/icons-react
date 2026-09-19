import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spo03jb3p.css';
import '../../css/l/lf77ncblg.css';
import '../../css/p/pq4o_cp0f.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spo03jb3p"/><path class="lf77ncblg"/><path class="pq4o_cp0f"/></g>`,
		"fallback": "cif:cg",
	});
}

export default Component;
