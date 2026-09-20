import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8vibybst.css';
import '../../css/p/p_xtnzbfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8vibybst"/><path class="p_xtnzbfk"/></g>`,
		"fallback": "streamline-plump-color:electric-cord-1-flat",
	});
}

export default Component;
