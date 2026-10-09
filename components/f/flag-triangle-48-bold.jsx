import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mheydraer.css';
import '../../css/b/b4g0wlvcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mheydraer"/><path class="b4g0wlvcp"/>`,
		"fallback": "energy-icons:flag-triangle-48-bold",
	});
}

export default Component;
