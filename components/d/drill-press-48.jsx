import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1fw4u24k.css';
import '../../css/a/ayk1lqtqi.css';
import '../../css/q/qbjntbton.css';
import '../../css/u/uzx1cpbdj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1fw4u24k"/><path class="ayk1lqtqi"/><path class="qbjntbton"/><path class="uzx1cpbdj"/>`,
		"fallback": "energy-icons:drill-press-48",
	});
}

export default Component;
