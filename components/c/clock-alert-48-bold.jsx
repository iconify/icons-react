import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq1625qbk.css';
import '../../css/v/v0h99ub0p.css';
import '../../css/q/qv75hb33y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq1625qbk"/><path class="v0h99ub0p"/><path class="qv75hb33y"/>`,
		"fallback": "energy-icons:clock-alert-48-bold",
	});
}

export default Component;
