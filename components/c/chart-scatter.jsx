import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvolslb_p.css';
import '../../css/g/g_ycfjira.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvolslb_p"/><path clip-rule="evenodd" class="g_ycfjira"/></g>`,
		"fallback": "icon-park-outline:chart-scatter",
	});
}

export default Component;
