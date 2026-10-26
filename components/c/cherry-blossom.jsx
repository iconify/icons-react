import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n620nr8wa.css';
import '../../css/l/l1_zlpr0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="n620nr8wa"/><path class="l1_zlpr0p"/></g>`,
		"fallback": "doodle-icons:cherry-blossom",
	});
}

export default Component;
