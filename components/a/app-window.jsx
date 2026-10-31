import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ju4ntchta.css';
import '../../css/o/oqymwdbzd.css';
import '../../css/j/jv_nu-gmm.css';
import '../../css/t/t90us5b1w.css';
import '../../css/y/ymuyu3bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ju4ntchta wm-k"/><path class="oqymwdbzd wm-k"/><path class="jv_nu-gmm wm-k"/><path class="t90us5b1w wm-shadow"/><path class="wm-shine ymuyu3bni"/></g>`,
		"fallback": "withicons-valentine:app-window",
	});
}

export default Component;
