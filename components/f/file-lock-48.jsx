import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9uhwm-oy.css';
import '../../css/p/p6h1q_4_y.css';
import '../../css/w/wweom8b5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9uhwm-oy"/><path class="p6h1q_4_y"/><path class="wweom8b5r"/>`,
		"fallback": "energy-icons:file-lock-48",
	});
}

export default Component;
