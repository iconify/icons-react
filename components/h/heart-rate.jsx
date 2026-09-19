import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wfrcxsbfo.css';
import '../../css/g/g8s7ym8bq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wfrcxsbfo"/><path class="g8s7ym8bq"/></g>`,
		"fallback": "icon-park:heart-rate",
	});
}

export default Component;
