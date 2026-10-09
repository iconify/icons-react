import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di7upcblc.css';
import '../../css/o/o5gtl8zhh.css';
import '../../css/w/we-nd7j-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di7upcblc"/><path class="o5gtl8zhh"/><path class="we-nd7j-a"/>`,
		"fallback": "energy-icons:import-export-48",
	});
}

export default Component;
