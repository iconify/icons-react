import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuxnc_b9h.css';
import '../../css/q/qj5twlbig.css';
import '../../css/i/ih7l-db9h.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wm-01wyyk.css';
import '../../css/j/jnwzt6pjq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuxnc_b9h"/><path class="qj5twlbig"/><path class="ih7l-db9h"/><g class="brzn_0bpr"><path class="wm-01wyyk"/><path class="jnwzt6pjq"/></g>`,
		"fallback": "openmoji:facebook",
	});
}

export default Component;
