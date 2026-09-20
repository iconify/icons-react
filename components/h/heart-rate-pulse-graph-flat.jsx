import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfbpfv12y.css';
import '../../css/n/np4vdmbzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pfbpfv12y"/><path clip-rule="evenodd" class="np4vdmbzp"/></g>`,
		"fallback": "streamline-plump-color:heart-rate-pulse-graph-flat",
	});
}

export default Component;
