import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l8912v45a.css';
import '../../css/v/vjnhz7bwb.css';
import '../../css/q/qbsx6nwvy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="l8912v45a"/><path class="vjnhz7bwb"/><path class="qbsx6nwvy"/></g>`,
		"fallback": "icon-park:applet-closed",
	});
}

export default Component;
