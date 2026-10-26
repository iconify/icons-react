import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bfegwccue.css';
import '../../css/e/e-u0agotz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="bfegwccue"/><path class="e-u0agotz"/></g>`,
		"fallback": "doodle-icons:butterfly",
	});
}

export default Component;
