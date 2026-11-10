import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efktenb0c.css';
import '../../css/q/qjm2rfbmr.css';
import '../../css/o/oyr7g8b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="efktenb0c"/><path class="qjm2rfbmr"/><path class="oyr7g8b0l"/></g>`,
		"fallback": "andrsrxn:folder-warning",
	});
}

export default Component;
