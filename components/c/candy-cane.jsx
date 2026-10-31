import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/s/s_5m5o48u.css';
import '../../css/v/v37hgj6_q.css';
import '../../css/r/rrl32abvs.css';
import '../../css/a/aer6wibxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><path class="s_5m5o48u wm-shadow"/><path class="v37hgj6_q wm-k"/><path class="rrl32abvs wm-k"/><path class="aer6wibxa wm-k"/></g>`,
		"fallback": "withicons-brutal:candy-cane",
	});
}

export default Component;
