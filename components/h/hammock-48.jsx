import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgrtu-b6i.css';
import '../../css/y/yft263tla.css';
import '../../css/i/iqd64138m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgrtu-b6i"/><path class="yft263tla"/><path class="iqd64138m"/>`,
		"fallback": "energy-icons:hammock-48",
	});
}

export default Component;
