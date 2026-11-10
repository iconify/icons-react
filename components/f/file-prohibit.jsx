import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpkf190gy.css';
import '../../css/j/jiopudb-q.css';
import '../../css/h/he9jvab1l.css';
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
		"content": `<g class="ft5dv1b6b"><path class="dpkf190gy"/><path class="jiopudb-q"/><path class="he9jvab1l"/><circle class="mkemt7zoa"/><path class="k5u1nxbdp"/></g>`,
		"fallback": "andrsrxn:file-prohibit",
	});
}

export default Component;
