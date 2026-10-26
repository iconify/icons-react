import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/nd6g5t5yt.css';
import '../../css/k/kdyi4knmi.css';
import '../../css/g/g0r9zom_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="nd6g5t5yt"/><path class="kdyi4knmi"/><path class="g0r9zom_u"/></g>`,
		"fallback": "doodle-icons:external-link",
	});
}

export default Component;
