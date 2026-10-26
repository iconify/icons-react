import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/e/e4b73-b9f.css';
import '../../css/n/nddo_tskf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="e4b73-b9f"/><path class="nddo_tskf"/></g>`,
		"fallback": "doodle-icons:arrow-up",
	});
}

export default Component;
