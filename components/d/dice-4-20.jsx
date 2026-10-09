import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxp0_ibgn.css';
import '../../css/m/mt2zsubui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxp0_ibgn"/><path class="mt2zsubui"/>`,
		"fallback": "energy-icons:dice-4-20",
	});
}

export default Component;
