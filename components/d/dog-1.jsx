import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8ebqfbef.css';
import '../../css/h/hj_qm2-ev.css';
import '../../css/e/e-uqb4bzw.css';
import '../../css/f/fhmm92hsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n8ebqfbef"/><path class="hj_qm2-ev"/><path class="e-uqb4bzw"/><path class="fhmm92hsx"/></g>`,
		"fallback": "streamline-cyber-color:dog-1",
	});
}

export default Component;
