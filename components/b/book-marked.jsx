import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eeu50zbik.css';
import '../../css/u/u9vxk4q8r.css';
import '../../css/c/c4a_-4b6a.css';
import '../../css/o/ou58-lsrx.css';
import '../../css/e/e-xgsvbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eeu50zbik wm-k"/><path class="u9vxk4q8r wm-k"/><path class="c4a_-4b6a wm-k"/><path class="ou58-lsrx wm-shadow"/><path class="e-xgsvbwc wm-shine"/></g>`,
		"fallback": "withicons-valentine:book-marked",
	});
}

export default Component;
