import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2k8ah5hs.css';
import '../../css/q/q18-obcpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2k8ah5hs"/><path class="q18-obcpc"/>`,
		"fallback": "energy-icons:alarm-clock-off-48-bold",
	});
}

export default Component;
