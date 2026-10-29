import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gqkt7bcvk.css';
import '../../css/u/up3pyu-he.css';
import '../../css/l/ldia-8bfr.css';
import '../../css/j/js83bcb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gqkt7bcvk"/><path class="up3pyu-he wm-a"/><path class="ldia-8bfr wm-k"/><path class="js83bcb_r wm-a"/></g>`,
		"fallback": "withicons:football-sketch",
	});
}

export default Component;
