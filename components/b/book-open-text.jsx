import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ddnvz1tnc.css';
import '../../css/g/gdp166b8a.css';
import '../../css/p/pb3f6qbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ddnvz1tnc wm-k"/><path class="gdp166b8a wm-shine"/><path class="pb3f6qbdb wm-shine"/></g>`,
		"fallback": "withicons-lunar:book-open-text",
	});
}

export default Component;
