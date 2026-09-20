import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg5h58z3w.css';
import '../../css/g/gn57r54_e.css';
import '../../css/z/z18elabky.css';
import '../../css/i/ib4fmdpkk.css';
import '../../css/m/mt41g-bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg5h58z3w"/><path class="gn57r54_e"/><path class="z18elabky"/><path class="ib4fmdpkk"/><path class="mt41g-bul"/></g>`,
		"fallback": "streamline-cyber-color:heart-balloon",
	});
}

export default Component;
