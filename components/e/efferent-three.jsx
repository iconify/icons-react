import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ybut5hbil.css';
import '../../css/n/njq819f5t.css';
import '../../css/q/q63ecculx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ybut5hbil"/><path class="njq819f5t"/><path class="q63ecculx"/></g>`,
		"fallback": "icon-park:efferent-three",
	});
}

export default Component;
