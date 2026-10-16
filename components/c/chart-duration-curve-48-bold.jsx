import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpel3hezc.css';
import '../../css/m/mu6uv0kwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpel3hezc"/><path class="mu6uv0kwb"/>`,
		"fallback": "energy-icons:chart-duration-curve-48-bold",
	});
}

export default Component;
