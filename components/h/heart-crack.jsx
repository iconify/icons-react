import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eo4wiwbzc.css';
import '../../css/p/pacsaqb4m.css';
import '../../css/g/gkfzogb0a.css';
import '../../css/l/lj29asbqz.css';
import '../../css/r/rw0t3zngy.css';
import '../../css/y/yre-pzbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eo4wiwbzc wm-k"/><path class="pacsaqb4m wm-deco"/><path class="gkfzogb0a wm-k"/><path class="lj29asbqz wm-shadow"/><path class="rw0t3zngy wm-shine"/><path class="wm-shine yre-pzbau"/></g>`,
		"fallback": "withicons-valentine:heart-crack",
	});
}

export default Component;
