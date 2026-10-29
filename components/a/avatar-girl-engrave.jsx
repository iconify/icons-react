import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i9hp7acra.css';
import '../../css/c/cu1-3eo1h.css';
import '../../css/b/bd9iuybie.css';
import '../../css/f/faaiuubbc.css';
import '../../css/c/cc1cp5b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i9hp7acra"/><path class="cu1-3eo1h wm-shadow"/><path class="bd9iuybie"/><path class="faaiuubbc"/><path class="cc1cp5b9b"/></g>`,
		"fallback": "withicons:avatar-girl-engrave",
	});
}

export default Component;
