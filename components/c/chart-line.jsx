import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g_12-kblq.css';
import '../../css/i/idr4sablm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="g_12-kblq"/><path class="idr4sablm"/></g>`,
		"fallback": "icon-park:chart-line",
	});
}

export default Component;
