import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/nenjaxbvi.css';
import '../../css/a/apjryz23p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="nenjaxbvi"/><path class="apjryz23p"/></g>`,
		"fallback": "doodle-icons:camera",
	});
}

export default Component;
