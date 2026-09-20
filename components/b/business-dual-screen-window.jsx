import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i97lt2_3g.css';
import '../../css/g/gc94qmbef.css';
import '../../css/d/dsfmdzhhv.css';
import '../../css/h/hamahs9xf.css';
import '../../css/e/e_xk2-l8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i97lt2_3g"/><path class="gc94qmbef"/><path class="dsfmdzhhv"/><path class="hamahs9xf"/><path class="e_xk2-l8a"/></g>`,
		"fallback": "streamline-cyber-color:business-dual-screen-window",
	});
}

export default Component;
