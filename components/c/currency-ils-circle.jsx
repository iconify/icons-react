import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbaen_ipu.css';
import '../../css/u/uc4-dccgp.css';
import '../../css/v/vgc75mb4e.css';
import '../../css/c/cym3j2a8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dbaen_ipu"/><path class="uc4-dccgp"/><path class="vgc75mb4e"/><path class="cym3j2a8z"/></g>`,
		"fallback": "andrsrxn:currency-ils-circle",
	});
}

export default Component;
