import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ff32mrbfr.css';
import '../../css/a/anvwsjdik.css';
import '../../css/e/ewjj8u_lc.css';
import '../../css/a/aqoq5mbro.css';
import '../../css/a/addmhcrht.css';
import '../../css/c/cnw0pkbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ff32mrbfr"/><path class="anvwsjdik"/><path class="ewjj8u_lc"/><path class="aqoq5mbro"/><path class="addmhcrht"/><path class="cnw0pkbtm"/></g>`,
		"fallback": "streamline-cyber-color:badge",
	});
}

export default Component;
