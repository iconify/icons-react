import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmo0ql5db.css';
import '../../css/j/jiopudb-q.css';
import '../../css/t/t5bqelboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pmo0ql5db"/><path class="jiopudb-q"/><path class="t5bqelboa"/></g>`,
		"fallback": "andrsrxn:file-heart",
	});
}

export default Component;
