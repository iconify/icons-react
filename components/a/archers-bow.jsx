import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m16glkxml.css';
import '../../css/o/orqht4b7r.css';
import '../../css/j/jdajip6yp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="m16glkxml"/><path class="orqht4b7r"/><path class="jdajip6yp"/></g>`,
		"fallback": "icon-park:archers-bow",
	});
}

export default Component;
