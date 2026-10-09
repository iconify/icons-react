import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbmpiqbiz.css';
import '../../css/r/rcdbnd-dt.css';
import '../../css/w/wbtogqaxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbmpiqbiz"/><path class="rcdbnd-dt"/><path class="wbtogqaxx"/>`,
		"fallback": "energy-icons:heat-exchanger-48-bold",
	});
}

export default Component;
