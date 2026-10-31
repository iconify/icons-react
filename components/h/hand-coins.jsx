import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/ws4_u1c6h.css';
import '../../css/a/ax6utlbeh.css';
import '../../css/b/b9nc3-f7s.css';
import '../../css/h/hrj033bnp.css';
import '../../css/k/kwr1fbbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ws4_u1c6h"/><path class="ax6utlbeh wm-shadow"/><path class="b9nc3-f7s"/><path class="hrj033bnp"/><path class="kwr1fbbur"/></g>`,
		"fallback": "withicons-brutal:hand-coins",
	});
}

export default Component;
