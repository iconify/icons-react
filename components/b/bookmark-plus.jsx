import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nzdt2o4py.css';
import '../../css/c/ctyrskm2h.css';
import '../../css/o/oixudw5qi.css';
import '../../css/l/lg1f1q9nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nzdt2o4py wm-shadow"/><path class="ctyrskm2h wm-shadow"/><path class="oixudw5qi"/><path class="lg1f1q9nq"/></g>`,
		"fallback": "withicons-brutal:bookmark-plus",
	});
}

export default Component;
