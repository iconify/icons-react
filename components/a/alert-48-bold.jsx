import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvr1cwbqh.css';
import '../../css/q/qfa9e5rcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvr1cwbqh"/><path class="qfa9e5rcc"/>`,
		"fallback": "energy-icons:alert-48-bold",
	});
}

export default Component;
