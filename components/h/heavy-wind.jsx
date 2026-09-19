import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/id-9qdfhy.css';
import '../../css/d/d3qtm7bgs.css';
import '../../css/g/g9_u062ja.css';
import '../../css/g/gpx9lwbkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="id-9qdfhy"/><path class="d3qtm7bgs"/><path class="g9_u062ja"/><path class="gpx9lwbkr"/></g>`,
		"fallback": "icon-park:heavy-wind",
	});
}

export default Component;
