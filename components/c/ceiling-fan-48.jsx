import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt-79lb5g.css';
import '../../css/g/gv8kgybmq.css';
import '../../css/c/cht4xbeio.css';
import '../../css/t/t49p7pbwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt-79lb5g"/><path class="gv8kgybmq"/><path class="cht4xbeio"/><path class="t49p7pbwl"/>`,
		"fallback": "energy-icons:ceiling-fan-48",
	});
}

export default Component;
