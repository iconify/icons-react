import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbaen_ipu.css';
import '../../css/c/cpmce5bzj.css';
import '../../css/l/lovowablv.css';
import '../../css/c/cym3j2a8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dbaen_ipu"/><path class="cpmce5bzj"/><path class="lovowablv"/><path class="cym3j2a8z"/></g>`,
		"fallback": "andrsrxn:currency-ils-circle",
	});
}

export default Component;
