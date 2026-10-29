import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e4h-h4b2h.css';
import '../../css/j/jchxhzb8n.css';
import '../../css/x/x0gmzy4ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e4h-h4b2h"/><path class="jchxhzb8n wm-shadow"/><path class="x0gmzy4ai"/></g>`,
		"fallback": "withicons:chevron-down-engrave",
	});
}

export default Component;
