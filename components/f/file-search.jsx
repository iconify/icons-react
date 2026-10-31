import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq48bed9g.css';
import '../../css/r/r-zkk5b0n.css';
import '../../css/e/et3q1i44d.css';
import '../../css/u/u0v7b4g_u.css';
import '../../css/m/m9wpkybua.css';
import '../../css/n/nwhyelijt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qq48bed9g wm-k"/><path class="r-zkk5b0n wm-deco"/><path class="et3q1i44d wm-k"/><path class="u0v7b4g_u wm-k"/><path class="m9wpkybua wm-shadow"/><path class="nwhyelijt wm-shine"/></g>`,
		"fallback": "withicons-valentine:file-search",
	});
}

export default Component;
