import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/k_ip1acaw.css';
import '../../css/s/s4pgyn22p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="k_ip1acaw"/><path class="s4pgyn22p"/></g>`,
		"fallback": "doodle-icons:hash",
	});
}

export default Component;
