import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bsh7occcx.css';
import '../../css/d/dv-f5_bfs.css';
import '../../css/i/iedi-yb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bsh7occcx wm-shadow"/><path class="dv-f5_bfs wm-shadow"/><path class="iedi-yb1f"/></g>`,
		"fallback": "withicons-brutal:chart-column-stacked",
	});
}

export default Component;
