import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/iwtreq_tx.css';
import '../../css/j/j7ixlebbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="iwtreq_tx"/><path class="j7ixlebbl"/></g>`,
		"fallback": "keyline-icons:git-graph-sharp-two-tone",
	});
}

export default Component;
