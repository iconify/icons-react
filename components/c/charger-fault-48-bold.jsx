import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6y08ddso.css';
import '../../css/q/qky_02hhd.css';
import '../../css/y/y7680abmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6y08ddso"/><path class="qky_02hhd"/><path class="y7680abmt"/>`,
		"fallback": "energy-icons:charger-fault-48-bold",
	});
}

export default Component;
