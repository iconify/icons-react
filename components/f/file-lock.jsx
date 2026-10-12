import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8evguv9q.css';
import '../../css/m/mi1r_-bbb.css';
import '../../css/d/dq8xtjbji.css';
import '../../css/x/xi2rjybhk.css';
import '../../css/i/ij512abgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8evguv9q"/><path class="mi1r_-bbb"/><path class="dq8xtjbji"/><rect class="xi2rjybhk"/><path class="ij512abgy"/></g>`,
		"fallback": "andrsrxn:file-lock",
	});
}

export default Component;
