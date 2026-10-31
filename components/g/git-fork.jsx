import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uazb19x4t.css';
import '../../css/n/nu3pjrtmx.css';
import '../../css/p/pmyvgs41w.css';
import '../../css/o/oslxxsbrc.css';
import '../../css/r/rs5g_dbjy.css';
import '../../css/p/ptmme6y2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uazb19x4t wm-shadow"/><path class="nu3pjrtmx wm-shadow"/><path class="pmyvgs41w"/><path class="oslxxsbrc"/><path class="rs5g_dbjy"/><path class="ptmme6y2w"/></g>`,
		"fallback": "withicons-brutal:git-fork",
	});
}

export default Component;
