import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bg8-v92az.css';
import '../../css/g/gsns-ke1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="bg8-v92az"/><path class="gsns-ke1i"/></g>`,
		"fallback": "doodle-icons:heart-arrow",
	});
}

export default Component;
