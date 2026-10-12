import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wntq5xn_m.css';
import '../../css/m/m9h-zrraw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wntq5xn_m"/><path class="m9h-zrraw"/>`,
		"fallback": "energy-icons:discount-48",
	});
}

export default Component;
