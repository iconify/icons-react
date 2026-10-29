import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u05w6wvrx.css';
import '../../css/b/bglb_-bwd.css';
import '../../css/u/ua-k4sbny.css';
import '../../css/d/dksj1oe9e.css';
import '../../css/g/gh-fgn-ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u05w6wvrx wm-k"/><path class="bglb_-bwd wm-s"/><path class="ua-k4sbny"/><path class="dksj1oe9e"/><path class="gh-fgn-ur wm-s"/></g>`,
		"fallback": "withicons-bauhaus:calendar-clock",
	});
}

export default Component;
