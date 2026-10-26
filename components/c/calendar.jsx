import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p0x8vwbcr.css';
import '../../css/n/nnpptybma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="p0x8vwbcr"/><path class="nnpptybma"/></g>`,
		"fallback": "doodle-icons:calendar",
	});
}

export default Component;
