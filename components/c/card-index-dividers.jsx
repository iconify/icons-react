import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtiqu-bms.css';
import '../../css/n/n7h6kub4u.css';
import '../../css/k/kkd92jbfi.css';
import '../../css/g/gda_6gbwj.css';
import '../../css/a/azb56ab7l.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/msr1pj_np.css';
import '../../css/p/pk1cbs03f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtiqu-bms"/><path class="n7h6kub4u"/><path class="kkd92jbfi"/><path class="gda_6gbwj"/><path class="azb56ab7l"/><g class="jn8qy4bru"><path class="msr1pj_np"/><path class="pk1cbs03f"/></g>`,
		"fallback": "openmoji:card-index-dividers",
	});
}

export default Component;
