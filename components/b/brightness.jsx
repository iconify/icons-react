import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ore586bka.css';
import '../../css/n/nqsj0rbim.css';
import '../../css/s/ssg4jed4q.css';
import '../../css/a/ao9n_xpfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ore586bka"/><path class="nqsj0rbim"/><path clip-rule="evenodd" class="ssg4jed4q"/><path class="ao9n_xpfy"/></g>`,
		"fallback": "icon-park-outline:brightness",
	});
}

export default Component;
