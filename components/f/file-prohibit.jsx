import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oe6rs50rm.css';
import '../../css/a/a2lspcyco.css';
import '../../css/c/cq66con3t.css';
import '../../css/m/mkemt7zoa.css';
import '../../css/k/k5u1nxbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oe6rs50rm"/><path class="a2lspcyco"/><path class="cq66con3t"/><circle class="mkemt7zoa"/><path class="k5u1nxbdp"/></g>`,
		"fallback": "andrsrxn:file-prohibit",
	});
}

export default Component;
