import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnmx-0bxp.css';
import '../../css/h/h84xrioyd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnmx-0bxp"/><path class="h84xrioyd"/>`,
		"fallback": "energy-icons:heat-island-48",
	});
}

export default Component;
